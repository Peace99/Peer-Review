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

export async function verifyJwt(token) {
  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
  return jwtPayload;
}
