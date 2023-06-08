import express from "express";
import { Lecturer } from "../models/Lecturer";
import { Reviewer } from "../models/reviewer";
import { hash, compare } from "../lib/bcrypt";
import { HttpError } from "../common/dto/http.error";
import { generateJwt } from "../lib/jwt";

const router = express.Router();

router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = null;
    const findQuery = { email };
    user = await Lecturer.findOne(findQuery);
    if (!user) {
      user = await Reviewer.findOne(findQuery);
    }
    if (!user) throw new HttpError("User Not found", 404);
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) new HttpError("Invalid email or p[", 401);
    return res.status(500).json({
      accessToken: generateJwt(user),
      email,
    });
  } catch (error) {
    res.status(error?.statusCode || 500).json(error);
  }
});

router.post("/auth/sign-up", async (req, res) => {
  try {
    const { email, role, password } = req.body;
    const hashedPassword = await hash(password);
    const reviewerExists = Reviewer.exists({ email });
    const lecturerExists = Lecturer.exists({ email });
    if (reviewerExists || lecturerExists)
      throw new HttpError("User exists", 401);
    let newUser = null;
    if (role === "lecturer") {
      newUser = await Lecturer.create({
        email,
        password: hashedPassword,
      });
    } else {
      newUser = await Reviewer.create({
        email,
        password: hashedPassword,
      });
    }
    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    res.status(error?.statusCode || 500).json(error);
  }
});

export { router };
