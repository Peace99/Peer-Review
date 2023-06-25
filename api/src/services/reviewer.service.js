import { Reviewer } from "../models/reviewer";

export async function getAllReviewers() {
  return Reviewer.find({});
}
