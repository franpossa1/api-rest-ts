import { sign, verify } from "jsonwebtoken";
import { User } from "../interfaces/user.interface";

const SECRET_KEY = process.env.JWT_SECRET || "token.01";
const generateToken = async (id: string) => {
  const jwt = sign(id, SECRET_KEY, {
    expiresIn: "3h",
  });

  return jwt;
};
const verifyToken = async (jwt: string) => {
  const isOk = verify(jwt, SECRET_KEY);
};

export { verifyToken, generateToken };
