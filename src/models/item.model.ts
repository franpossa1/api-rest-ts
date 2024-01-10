import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    color: {
      type: String, required: true
    },
    gas: { type: String, enum: ["electric", "gas"],required: true },
    year: { type: Number,required: true },
    description: { type: String ,required: true},
  },
  { timestamps: true, versionKey: false }
);

const itemModel = model("items", ItemSchema);
export default itemModel;