import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      default: "Default description",
    },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = model("Users", UserSchema);
export default UserModel;
