import { Router } from "express";
import {
  createCategoryController,
  CreateSavedProductsController,
  DeleteSavedProductController,
  getCategoriesController,
  getSavedProductsController,
} from "../controllers";

const savedProductsRouter = Router();

savedProductsRouter
  .post("/", CreateSavedProductsController)
  .get("/", getSavedProductsController)
  .delete("/", DeleteSavedProductController);

export { savedProductsRouter };
