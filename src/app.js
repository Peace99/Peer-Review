import dotenv from "./lib/dotenv.js";
import "./security/jwt.strategy.js";
import { connectDB } from "./database/connect";
import express from "express";
import passport from "passport";

const port = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.authenticate());
connectDB(process.env.MONGO_URI);
app.listen(port, console.log(`Server is listening on port ${port}`));

app.get("/", (request, response) => {
  response.json("Peer Review");
});
