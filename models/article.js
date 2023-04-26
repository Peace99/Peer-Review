const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  Title: String,
  Journal: String,
  Abstract: String,
  publishStatus: String,
  File: String,
});

module.exports = mongoose.model("Article", articleSchema);
