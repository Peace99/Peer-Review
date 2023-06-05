import { Router } from "express";
import {
  findArticleById,
  getAllReviewsByArticleId,
  submitArticle,
} from "../services/article.service";
import { upload } from "../middlewares/multer";
import { HttpError } from "../common/dto/http.error";

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
  const article = await findArticleById(articleId);
  article.review = req.body;
  await article.save();
  if (!article) throw new HttpError("Invalid http error", 404);
});

// This endpoint takes a file to be reviewed
router.post("/articles/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No files were uploaded.");
    }
    const { id, fieldOfResearch } = req.user;
    const article = await submitArticle({
      lecturerId: id,
      fieldOfResearch,
      file: req.file,
    });

    res.json({
      message: "Article created successfully",
    });
  } catch (error) {
    res.status(error?.statusCode || 500).json(error);
  }
});

export { router };
