import mongoose from "mongoose";

export const reviewSchema = new mongoose.Schema({
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
});

export const Review = mongoose.model("Review", reviewSchema);
