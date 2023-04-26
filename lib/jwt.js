const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

async function generateJwt(user) {
  const { email, id } = user;
  const token = jwt.sign(
    {
      sub: id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "10m",
    }
  );
  return token;
}

async function verifyJwt(token) {
  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
  return jwtPayload;
}
