import { Router } from "express";
import {
  createOrderController,
  DeleteOrderController,
  getOrderController,
} from "../controllers";

const orderRouter = Router();
orderRouter
  .get("/", getOrderController)
  .post("/", createOrderController)
  .delete("/", DeleteOrderController);
export { orderRouter };
