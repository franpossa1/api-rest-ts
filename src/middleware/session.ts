import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?:string| JwtPayload;
}
const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isOk = verifyToken(`${jwt}`);
    if (!isOk) {
      res.status(401);
      res.send("Dont have a valid token");
    } else {
      req.user = isOk;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("Sesion no valida");
  }
};
export { checkJwt };
