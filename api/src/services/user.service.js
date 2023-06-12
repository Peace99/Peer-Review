import { Lecturer } from "../models/Lecturer";
import { Reviewer } from "../models/reviewer";

export async function findUserById(id, type) {
  switch (type) {
    case "lecturer":
      return Lecturer.findOne({ id });
    case "reviewer":
      return Reviewer.findOne({ id });
    default:
      return null;
  }
}
