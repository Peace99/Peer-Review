const mongoose = require('mongoose')

const lecturerschema = new mongoose.Schema({

  email:  String, // String is shorthand for {type: String}
  name: String,
  password:   String,
  department: String,
  articleId: mongoose.Schema.Types.ObjectId,
  fieldOfResearch: String,
  title: String
});