import express from "express";

const router = express.Router();

router.use((req, res, next) => {});

router.post("/login", (req, res) => {
  res.json({ hello: "" });
});