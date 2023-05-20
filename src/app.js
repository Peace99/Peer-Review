import "dotenv/config"
import { createExpressApp } from "./lib/express.js";
import {router as articleRouter} from "./routes/article.route.js";
import {router as authRouter} from "./routes/auth.route.js"

const app = createExpressApp();

app.get("/", (request, response) => {
  response.json("Peer Review");
});

app.use("/articles", articleRouter);
app.use("/auth", authRouter);