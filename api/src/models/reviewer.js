import mongoose from "mongoose";

const reviewerSchema = new mongoose.Schema({
  email: String, // String is shorthand for {type: String}
  name: String,
  password: String,
  department: String,
  fieldOfResearch: String,
  title: String,
});

export const Reviewer = mongoose.model("Reviewer", reviewerSchema);
