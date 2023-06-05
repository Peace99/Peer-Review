import mongoose from "mongoose";

const lecturerschema = new mongoose.Schema({
  email: String, // String is shorthand for {type: String}
  name: String,
  password: String,
  department: String,
  fieldOfResearch: String,
  title: String,
});

export const Lecturer = mongoose.model("Lecturer", lecturerschema);
