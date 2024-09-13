import { Router } from "express";
import { createProductController, getProductsController } from "../controllers";

const productRouter = Router();
productRouter
  .post("/", createProductController)
  .get("/", getProductsController);

export { productRouter };
