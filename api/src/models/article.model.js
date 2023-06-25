import mongoose, { Schema } from "mongoose";
import { reviewSchema } from "./review";

/** Article schema defined with validation rules */
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
    abstract: {
      type: String,
      required: true,
    },
    fieldOfResearch: {
      type: String,
      required: true,
    },
    reviewerId: {
      type: Schema.Types.ObjectId,
      ref: "Reviewer",
      default: null,
    },
    review: {
      type: reviewSchema,
      default: null,
    },
    published: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

/** Article model to be used for interacting with our collection. Refer to mongoose docs for the difference between a schema {@link https://mongoosejs.com/docs/guide.html} and a model {@link https://mongoosejs.com/docs/models.html} */
export const ArticleModel = mongoose.model("Article", ArticleSchema);
