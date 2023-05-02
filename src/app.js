import dotenv from "./lib/dotenv.js";
import { createExpressApp } from "./lib/express.js";

const app = createExpressApp();

app.get("/", (request, response) => {
  response.json("Peer Review");
});
