import { Router } from "express";
import {
  createProductController,
  DeleteProductController,
  editProductController,
  getOneProductController,
  getProductsController,
} from "../controllers";

const productRouter = Router();
productRouter
  .post("/", createProductController)
  .get("/", getProductsController)
  .get("/:id", getOneProductController)
  .delete("/", DeleteProductController)
  .put("/", editProductController);

export { productRouter };
