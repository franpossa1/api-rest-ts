import { Car } from "../interfaces/car.interface";
import itemModel from "../models/item.model";

const  insertItem = async (item:Car) => {
const responseInsert = await itemModel.create(item);
return responseInsert;
};
//TODO: ME QUEDE EN 1:00:10
const  getCars = async () => {
    const responseInsert = await itemModel.find({});
    return responseInsert;
    };
export { getCars, insertItem};
