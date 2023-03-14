const mongoose = require("mongoose");

const reviewerSchema = new mongoose.Schema({
  email: String, // String is shorthand for {type: String}
  name: String,
  password: String,
  department: String,
  fieldOfResearch: String,
  title: String,
});

module.exports = mongoose.model("Reviewer", reviewerSchema);