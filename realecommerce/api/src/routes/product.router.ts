import { Router } from "express";
import {
  createProductController,
  DeleteProductController,
  getOneProductController,
  getProductsController,
} from "../controllers";

const productRouter = Router();
productRouter
  .post("/", createProductController)
  .get("/", getProductsController)
  .get("/:id", getOneProductController)
  .delete("/", DeleteProductController);

export { productRouter };
