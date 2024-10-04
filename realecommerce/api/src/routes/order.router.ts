import { Router } from "express";
import {
  createOrderController,
  DeleteAllOrderController,
  DeleteOrderController,
  EditCountOrderController,
  getOneUserOrder,
  getOrderController,
} from "../controllers";

const orderRouter = Router();
orderRouter
  .get("/", getOrderController)
  .get("/oneUser", getOneUserOrder)
  .post("/", createOrderController)
  .delete("/", DeleteOrderController)
  .delete("/all", DeleteAllOrderController)
  .put("/", EditCountOrderController);
export { orderRouter };
