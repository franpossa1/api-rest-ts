import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();
/**
 * index.ts item
 * @returns
 * **/
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};
//Cargador dinamico de rutas
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (fileName !== "index.ts") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta /${cleanName}`)
        router.use(`/${cleanName}`, moduleRouter.itemRouter);
    })
     }
});

export { router };
