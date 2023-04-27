import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  articleId: String,
  reviewerId: String,
  dateReviewed: Date,
  Comment: Array,
});

export const Review = mongoose.model("Reveiw", reviewSchema);
