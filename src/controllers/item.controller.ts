import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import {
  insertItem,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item.service";

const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    const response = await getCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error GetItem request");
  }
};
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const id = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error updateItem request");
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error deleteItem request");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error getItems  request", error);
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertItem(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error postItem request", error);
  }
};

export { getItem, updateItem , deleteItem, getItems, postItem };
