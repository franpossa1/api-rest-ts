import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem,  updateItem } from "../controllers/item.controller";
import logMiddleware from "../middleware/log";
import { authCtrl, registerCtrl } from "../controllers/auth.controller";
 
const authRouter = Router();
/**http:localhost:3002/auth/register [POST]**/
authRouter.post("/register",registerCtrl);
authRouter.post("/login",authCtrl);
 

export {authRouter as itemRouter}