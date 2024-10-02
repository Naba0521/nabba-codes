import { Router } from "express";
import {
  createOrderController,
  DeleteAllOrderController,
  DeleteOrderController,
  EditCountOrderController,
  getOrderController,
} from "../controllers";

const orderRouter = Router();
orderRouter
  .get("/", getOrderController)
  .post("/", createOrderController)
  .delete("/", DeleteOrderController)
  .delete("/all", DeleteAllOrderController)
  .put("/", EditCountOrderController);
export { orderRouter };
