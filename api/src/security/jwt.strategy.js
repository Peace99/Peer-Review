import passport from "passport";
import { roles } from "../common/constants";
import { Lecturer } from "../models/Lecturer";
import { Reviewer } from "../models/reviewer";
import passportJwt from "passport-jwt";
import { Request } from "express";

passport.use(
  new passportJwt.Strategy(
    {
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    },
    authenticate
  )
);

/**
 * @param {Request} request
 */
async function authenticate(request, jwtPayload, done) {
  console.log("lol");
  if (request.path.startsWith("/auth")) return done();
  const currentTime = new Date();
  const exp = jwtPayload.exp;
  const expired = currentTime.getTime() >= new Date(exp).getTime();
  if (expired) return done("token expired");
  const role = jwtPayload.role;
  if (!roles.includes(role)) return done("Invalid role");
  if (role === "reviewer") {
    const reviewer = await Reviewer.findById(jwtPayload.id);
    request.user = reviewer;
    return done(null, reviewer);
  } else {
    const lecturer = await Lecturer.findById(jwtPayload.id);
    request.user = lecturer;
    return done(null, lecturer);
  }
}

export { passport };
