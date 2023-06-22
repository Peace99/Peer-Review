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
    let role = "lecturer";
    if (!user) {
      user = await Reviewer.findOne(findQuery);
      role = "reviewer";
    }
    if (!user) throw new HttpError("User Not found", 404);
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) new HttpError("Invalid email or password", 401);

    return res.status(200).json({
      accessToken: generateJwt(user, role),
      email,
      role,
      fieldOfResearch: user.fieldOfResearch,
      name: user.name
    });
  } catch (error) {
    res.status(error?.statusCode || 500).json(error);
  }
});

router.post("/auth/sign-up", async (req, res) => {
  try {
    const {title, name, email, role, password, fieldOfResearch} = req.body;
    const hashedPassword = await hash(password);
    const reviewerExists = await Reviewer.exists({ email });
    const lecturerExists = await Lecturer.exists({ email });
    if (reviewerExists || lecturerExists)
      throw new HttpError("User exists", 401);
    let newUser = null;
    if (role === "lecturer") {
      newUser = await Lecturer.create({
        title,
        name,
        email,
        fieldOfResearch,
        password: hashedPassword,
      });
    } else {
      newUser = await Reviewer.create({
        title,
        name,
        email,
        fieldOfResearch,
        password: hashedPassword,
      });
    }
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    res.status(error?.statusCode || 500).json(error);
  }
});

export { router };
