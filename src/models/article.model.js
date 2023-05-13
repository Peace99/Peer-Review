import mongoose, { Schema } from "mongoose";
import { Lecturer } from "./Lecturer";

const ArticleSchema = mongoose.Schema(
  {
    lecturerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Lecturer",
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fieldOfResearch: {
      type: String,
      required: true,
    },
    reviewerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Reviewer",
    },
    review: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Review",
      default: null,
    },
    publishStatus: true,
  },
  {
    timestamps: true,
  }
);
export const ArticleModel = mongoose.model("Submission");
