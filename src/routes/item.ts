import { Request, Response, Router } from "express";

/**
 * http://localhost:3000/items [GET]
 */
const itemRouter = Router();

itemRouter.get("/", (req: Request, res: Response) => {
    res.send({data: "Aqui van los modelos"})
});

export {itemRouter}