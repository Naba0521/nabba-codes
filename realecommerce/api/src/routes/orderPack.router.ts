import { Router } from "express";
import {
  createOrderPackController,
  editOrderPackController,
  getOneOrderPackController,
  getOneUserOrderPackController,
  getOrderPackController,
} from "../controllers";

const orderPackRouter = Router();
orderPackRouter
  .get("/", getOrderPackController)
  .get("/oneUser", getOneUserOrderPackController)
  .post("/", createOrderPackController)
  .get("/:id", getOneOrderPackController)
  .put("/", editOrderPackController);
export { orderPackRouter };
