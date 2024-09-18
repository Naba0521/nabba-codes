import { Router } from "express";
import {
  createProductController,
  getOneProductController,
  getProductsController,
} from "../controllers";

const productRouter = Router();
productRouter
  .post("/", createProductController)
  .get("/", getProductsController)
  .get("/:id", getOneProductController);

export { productRouter };
