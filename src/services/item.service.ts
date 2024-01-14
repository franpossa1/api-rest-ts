import { Car } from "../interfaces/car.interface";
import itemModel from "../models/item.model";

const insertItem = async (item: Car) => {
  const responseInsert = await itemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseInsert = await itemModel.find({});
  return responseInsert;
};
const getCar = async (id: any) => {
  const responseInsert = await itemModel.find({ _id: id });
  return responseInsert;
};

const deleteCar = async (id: any) => {
  const responseInsert = await itemModel.findByIdAndRemove({ _id: id });
  return responseInsert;
};

const updateCar = async (id: any, data: Car) => {
  const responseItem = await itemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};
export { updateCar, deleteCar, getCars, insertItem, getCar };
