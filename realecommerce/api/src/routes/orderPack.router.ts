import { Router } from "express";
import {
  createOrderPackController,
  getOrderPackController,
} from "../controllers";

const orderPackRouter = Router();
orderPackRouter
  .get("/", getOrderPackController)
  .post("/", createOrderPackController);
export { orderPackRouter };
