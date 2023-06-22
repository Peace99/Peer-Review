/** Utility functions to generate and verify json web tokens using jsonwebtoken package. 
 * Tokens follow the Jwt Spec: https://www.rfc-editor.org/rfc/rfc7519 */
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export function generateJwt(user, role) {
  const { email, id } = user;
  console.log(role);
  return jwt.sign(
    {
      sub: id,
      role,
    },
    jwtSecret,
    {
      expiresIn: "1000m",
    }
  );
}

/** This function is used to verify jwts using the secret key */
export async function verifyJwt(token) {
  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
  if (!jwtPayload.sub) throw new Error("Invalid jwt");
  return jwtPayload;
}
