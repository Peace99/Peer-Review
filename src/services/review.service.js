import { Review } from "../models/review";

export async function createReview(req, res) {
  const { articleId, reviewerId, comment } = req.body;
  const newReviewDocument = Review.create({
    articleId,
    reviewerId,
    comment,
    dateReviewed: new Date(),
  });
  return newReviewDocument.save();
}

export async function scheduleReview() {}
