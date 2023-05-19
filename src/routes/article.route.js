import { Router } from "express";
import { Review } from "../models/review";
import {
  getAllReviewsByArticleId,
  submitArticle,
} from "../services/article.service";
import { upload } from "../middlewares/multer";

const router = Router();

router.get("/articles/:articleId/review", async (req, res) => {
  const articleId = req.params.articleId;
  res.json({
    reviews: await getAllReviewsByArticleId(articleId),
  });
});

// This endpoint is used to create a review to a file
router.post("articles/:articleId/review", async (req, res) => {
  const articleId = req.params.articleId;
});

// This endpoint takes a file to be reviewed
router.post("/articles/", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No files were uploaded.");
  }
  const { id, fieldOfResearch } = req.user;
  await submitArticle({
    lecturerId: id,
    fieldOfResearch,
    file: req.file,
  });
  res.json({
    message: "Article created successfully",
  });
});


export {router}