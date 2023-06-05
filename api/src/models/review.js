import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  articleId: {
    type: String,
    required: true,
    ref: "Article",
  },
  reviewerId: {
    type: String,
    required: true,
    ref: "Reviewer",
  },
  dateReviewed: {
    type: Date,
    default: null,
  },
  comment: {
    type: String,
    default: null,
  },
});

export const Review = mongoose.model("Review", reviewSchema);
