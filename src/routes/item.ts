import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, update } from "../controllers/item.controller";

/**
 * http://localhost:3000/items [GET]
 */
const itemRouter = Router();

itemRouter.get("/", getItems);
itemRouter.get("/:id", getItem);
itemRouter.post("/", postItem);
itemRouter.delete("/:id", deleteItem);
itemRouter.put("/:id", update);

export {itemRouter}