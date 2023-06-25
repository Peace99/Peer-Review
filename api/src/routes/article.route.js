import { Router } from "express";
import {
  findArticleById,
  findArticlesByReviewer,
  getAllReviewsByArticleId,
  submitArticle,
} from "../services/article.service";
import { upload } from "../middlewares/multer";
import { HttpError } from "../common/dto/http.error";
import { passport } from "../security/jwt.strategy";
import { ArticleModel } from "../models/article.model";
import { removeSpaces } from "../common/util";
import { Lecturer } from "../models/Lecturer";
import { Reviewer } from "../models/reviewer";

const router = Router();

router.get(
  "/articles/:articleId/review",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const articleId = req.params.articleId;
    res.json({
      reviews: await getAllReviewsByArticleId(articleId),
    });
  }
);

router.get(
  "/articles/reviewer/:reviewerId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const reviewerId = req.params.reviewerId;
      const articles = await findArticlesByReviewer(reviewerId);
      res.status(200).json(articles);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error occured" });
    }
  }
);
// This endpoint is used to create a review to a file
router.post(
  "/articles/:articleId/review",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const articleId = req.params.articleId;
      console.log(articleId);
      const article = await findArticleById(articleId);
      if (!article) throw new HttpError("Article not found", 404);
      console.log(article);
      article.review = req.body;
      await article.save();
      res.json(article);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error occured" });
    }
  }
);

router.get(
  "/articles/lecturer/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const articles = await ArticleModel.find({
        lecturerId: req?.params?.id,
      });
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ message: "error occured" });
    }
  }
);

// This endpoint takes a file to be reviewed
router.post(
  "/articles/",
  [passport.authenticate("jwt", { session: false }), upload.single("file")],
  async (req, res) => {
    try {
      if (!req.file) {
        throw new HttpError("No files were uploaded");
      }
      const { id } = req.user;
      const { abstract, title, fieldOfResearch, accompanyingLetter } = req.body;
      const article = await submitArticle({
        lecturerId: id,
        fieldOfResearch,
        abstract,
        title,
        accompanyingLetter,
        url: removeSpaces(req?.file?.originalname),
      });
      res.status(200).json(article);
    } catch (error) {
      console.log(error);
      res.status(error?.statusCode || 500).json(error);
    }
  }
);

router.get(
  '/articles/',
  // [passport.authenticate("jwt", { session: false })],
  async(req, res) => {
    try {
 const articles = await ArticleModel.find({})
   .populate("lecturerId", "name") // Include the actual lecturer with only the 'name' field
   .populate("reviewerId", "name") // Include the reviewer with only the 'name' field
   .exec();

 console.log(articles);

  res.status(200).json(articles);
    }
  catch(error) {console.log(error);
      res.status(error?.statusCode || 500).json(error);
    }
  }
)

router.get(
  "/authors/",
  [passport.authenticate("jwt", { session: false })],
  async (req, res) => {
    try {
      const authors = await Lecturer.find();
      res.status(200).json(authors);
    } catch (error) {
      console.log(error);
      res.status(error?.statusCode || 500).json(error);
    }
  }
);

export { router };
