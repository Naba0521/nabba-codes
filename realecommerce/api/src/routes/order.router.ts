import { Router } from "express";
import { createOrderController, getOrderController } from "../controllers";

const orderRouter = Router();
orderRouter.get("/", getOrderController).post("/", createOrderController);
export { orderRouter };
