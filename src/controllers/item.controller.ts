import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import {insertItem,getCars} from "../services/item.service";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error GetItem request");
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error updateItem request");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error deleteItem request");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error getItems  request",error);
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertItem(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error postItem request",error);
  }
};

export { getItem, updateItem as update, deleteItem, getItems, postItem };
