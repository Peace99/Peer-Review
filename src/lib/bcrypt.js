import bcrypt from "bcrypt";

export async function hash(rawString) {
  return bcrypt.hash(rawString, 10);
}

export async function compare(rawString, hash) {
  return bcrypt.compare(rawString, hash);
}
