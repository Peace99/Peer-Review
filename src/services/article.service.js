import { ArticleModel } from "../models/article.model.js";
import { Review } from "../models/review.js";

export async function submitArticle({ lecturerId, fieldOfResearch, file }) {
  const articleDocument = await ArticleModel.create({
    url: file.name,
    lecturerId,
    fieldOfResearch,
  });
  return articleDocument.save();
}

export async function getAllReviewsByArticleId(articleId) {
  return Review.find({
    articleId,
  });
}

export async function createReview({ articleId }) {
  const article = await ArticleModel.findOne({
    id: articleId,
  });
  if (!article) throw new Error({ statusCode: 404 });
  const reviewDocument = Review.create({
    articleId,
  });
  article.review = reviewDocument;
  return await article.save();
}

export async function findArticlesByReviewer(reviewerId) {
  return ArticleModel.find({
    reviewerId,
  });
}
