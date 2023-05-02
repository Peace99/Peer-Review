import "../security/jwt.strategy.js";
import express from "express";
import { connectDB } from "../database/connect.js";
import passport from "passport";
import { ErrorHandlerMiddleware } from "../middlewares/error-handler.js";

/** Function to scaffold our express server bundled with all important middlewares- and configuration. Done to declutter app.js file */
export function createExpressApp() {
  const port = process.env.PORT || 8080;
  connectDB(process.env.MONGO_URI);
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(passport.authenticate());
  app.use(ErrorHandlerMiddleware);
  app.listen(port, console.log(`Server is listening on port ${port}`));
  return app;
}
