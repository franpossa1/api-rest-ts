import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const registerCtrl = async (req: Request, res: Response) => {
  try {
    const registerUser = await registerNewUser(req.body);
    res.send(registerUser);
  } catch (error) {}
};

const authCtrl = async (req: Request, res: Response) => {
  try {
    const isUserValid = await loginUser(req.body);
    if (!isUserValid) {
      res.status(403);
      res.send("Password is invalid");
    } else {
      res.send(isUserValid);
    }
  } catch (error) {}
};
export { registerCtrl, authCtrl };
