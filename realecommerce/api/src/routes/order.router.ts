import { Router } from "express";
import {
  createOrderController,
  DeleteOrderController,
  EditCountOrderController,
  getOrderController,
} from "../controllers";

const orderRouter = Router();
orderRouter
  .get("/", getOrderController)
  .post("/", createOrderController)
  .delete("/", DeleteOrderController)
  .put("/", EditCountOrderController);
export { orderRouter };
