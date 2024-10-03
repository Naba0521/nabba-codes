import { Router } from "express";
import {
  createOrderPackController,
  getOneOrderPackController,
  getOrderPackController,
} from "../controllers";

const orderPackRouter = Router();
orderPackRouter
  .get("/", getOrderPackController)
  .post("/", createOrderPackController)
  .get("/:id", getOneOrderPackController);
export { orderPackRouter };
