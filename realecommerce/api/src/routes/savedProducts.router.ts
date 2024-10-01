import { Router } from "express";
import {
  CreateSavedProductsController,
  DeleteSavedProductController,
  getOneUsersavedProduct,
  getSavedProductsController,
} from "../controllers";

const savedProductsRouter = Router();

savedProductsRouter
  .post("/", CreateSavedProductsController)
  .get("/", getSavedProductsController)
  .delete("/", DeleteSavedProductController)
  .get("/oneUser", getOneUsersavedProduct);

export { savedProductsRouter };
