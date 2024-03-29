import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem,  updateItem } from "../controllers/item.controller";
import logMiddleware from "../middleware/log";

/**
 * http://localhost:3000/items [GET]
 */
const itemRouter = Router();

itemRouter.get("/",logMiddleware, getItems);
itemRouter.get("/:id", getItem);
itemRouter.post("/", postItem);
itemRouter.delete("/:id", deleteItem);
itemRouter.put("/:id", updateItem);

export {itemRouter}