import { ArticleModel } from "../models/article.model";
import { Review } from "../models/review";
import { Reviewer } from "../models/reviewer";

/** Create an article
 * @param {Object} argument
 * @param {string} argument.lecturerId - id of lecturer in string format
 * @param {string} argument.fieldOfResearch - lecturer's field of research,
 * @param {File} argument.file document file for article
 */
export async function submitArticle({
  lecturerId,
  fieldOfResearch,
  url,
  title,
  abstract,
}) {
  const articleDocument = await ArticleModel.create({
    url,
    lecturerId,
    fieldOfResearch,
    title,
    abstract,
  });
  // const reviewers = await Reviewer.find({
  //   fieldOfResearch,
  // });
  // articleDocument.reviewerId = reviewers[0]._id;
  return articleDocument.save();
}

export async function getAllReviewsByArticleId(articleId) {
  return Review.find({
    articleId,
  });
}

export async function findArticleById(id) {
  return ArticleModel.findOne({
    id,
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
