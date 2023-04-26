const express = require("express");
require("dotenv").config();
const connectDB = require("./database/connect");
const passport = require("passport");
require("./security/jwt.strategy");

const port = 5500;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(passport.authenticate());
connectDB(process.env.MONGO_URI);
app.listen(port, console.log(`Server is listening on port ${port}`));

app.get("/", (request, response) => {
  response.json("Peer Review");
});
