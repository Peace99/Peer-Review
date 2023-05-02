/** Utility functions to generate and verify json web tokens using jsonwebtoken package. Tokens follow the Jwt Spec: https://www.rfc-editor.org/rfc/rfc7519 */
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export async function generateJwt(user) {
  const { email, id } = user;
  const token = jwt.sign(
    {
      sub: id,
    },
    jwtSecret,
    {
      expiresIn: "10m",
    }
  );
  return token;
}

/** This function is used to verify jwts using the secret key */
export async function verifyJwt(token) {
  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
  if (!jwtPayload.sub) throw new Error("Invalid jwt");
  return jwtPayload;
}
