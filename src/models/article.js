import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  Title: String,
  Journal: String,
  Abstract: String,
  publishStatus: String,
  File: String,
});

export const Article = mongoose.model("Article", articleSchema);
