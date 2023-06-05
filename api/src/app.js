import dotenv from "./lib/dotenv.js";
import { createExpressApp } from "./lib/express.js";
import { router as ArticleRouter } from "./routes/article.route.js";
import { router as AuthRouter } from "./routes/auth.route.js";

const app = createExpressApp();
app.use(ArticleRouter);
app.use(AuthRouter);

app.get("/", (request, response) => {
  response.json("Peer Review");
});
