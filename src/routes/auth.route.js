import express from "express";
import { Lecturer } from "../models/Lecturer";
import { Reviewer } from "../models/reviewer";
import { hash, compare } from "../lib/bcrypt";
import { HttpError } from "../common/dto/http.error";
import { generateJwt } from "../lib/jwt";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = null;
  const findQuery = { email };
  user = await Lecturer.findOne(findQuery);
  if (!user) {
    user = await Reviewer.findOne(findQuery);
  }
  if (!user) throw new Error("User Not found");
  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch)
    throw new Error(
      new HttpError({
        status: 400,
      })
    );
  return res.json({
    accessToken: generateJwt(user),
    email,
  });
});

router.post("/sign-up", async (req, res) => {
  const { email, role, password } = req.body;
  const hashedPassword = await hash(password);
  let newUser = null;
  if (role === "lecturer") {
    newUser = Lecturer.create({
      email,
      password: hashedPassword,
    });
  } else {
    newUser = Reviewer.create({
      email,
      password: hashedPassword,
    });
  }
  await newUser.save();
  return res.json(newUser);
});


export {router};