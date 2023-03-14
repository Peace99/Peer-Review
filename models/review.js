const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    articleId: String,
    reviewerId: String,
    dateReviewed: Date,
    Comment: Array
})

module.exports = mongoose.model("Reveiw", reviewSchema);