import multer from "multer";
import path from "path";
import { removeSpaces } from "../common/util";

// Multer middleware to handle in memory storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, removeSpaces(file.originalname));
  },
});

export const upload = multer({ storage });
