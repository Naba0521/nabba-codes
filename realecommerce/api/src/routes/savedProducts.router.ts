import { Router } from "express";
import {
  createCategoryController,
  CreateSavedProductsController,
  getCategoriesController,
  getSavedProductsController,
} from "../controllers";

const savedProductsRouter = Router();

savedProductsRouter
  .post("/", CreateSavedProductsController)
  .get("/", getSavedProductsController);

export { savedProductsRouter };
