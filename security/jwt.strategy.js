const passport = require("passport");
const passportJwt = require("passport-jwt");
const { roles } = require("../common/constants");
const reviewer = require("../models/reviewer");
const Lecturer = require("../models/Lecturer");
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

async function authenticate(request, jwtPayload, done) {
  const currentTime = new Date();
  const exp = jwtPayload.exp;
  const expired = currentTime.getTime() >= new Date(exp).getTime();
  if (expired) return done("token expired");
  const role = jwtPayload.role;
  if (!roles.includes(role)) return done("Invalid role");
  if (role === "reviewer") {
    const reviewer = await reviewer.findById(jwtPayload.id);
    request.user = reviewer;
    return done(null, reviewer);
  } else {
    const lecturer = await Lecturer.findById(jwtPayload.id);
    request.user = lecturer;
    return done(null, lecturer);
  }
}
