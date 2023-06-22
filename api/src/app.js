import dotenv from "./lib/dotenv.js";
import { createExpressApp } from "./lib/express.js";
import { router as ArticleRouter } from "./routes/article.route.js";
import { router as AuthRouter } from "./routes/auth.route.js";
import express from "express";
import path from "path";
import 'dotenv/config.js'

const app = createExpressApp();
app.use("/static", express.static(path.join(__dirname, "uploads")));
app.use(ArticleRouter);
app.use(AuthRouter);

app.get("/", (request, response) => {
  response.json("Peer Review");
});
