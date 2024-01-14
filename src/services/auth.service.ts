import { Request } from "express";
import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user.model";
import { User } from "../interfaces/user.interface";
import { encrypt, verify } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handler";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIfExistUser = await UserModel.findOne({ email: email });
  if (checkIfExistUser) {
    return "already registered";
  }
  const registerUser = await UserModel.create({
    email,
    password: await encrypt(password),
    name,
  });
  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const UserDB = await UserModel.findOne({ email: email });
  if (!UserDB) {
    return "Not Found User";
  }
  const isCorrect = await verify(password, UserDB.password);
  if (!isCorrect) {
    return "Password incorrect";
  } else {
    const token = generateToken(UserDB.email);
    const data = {
      token : token,
      data:UserDB,
    }
    return data;
  }
};

export { registerNewUser, loginUser };
