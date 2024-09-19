import { Router } from "express";
import {
  createReviewController,
  getProductIdReviewController,
  getReviewController,
} from "../controllers";

const reviewRouter = Router();
reviewRouter
  .get("/", getReviewController)
  .post("/", createReviewController)
  .get("/:productId", getProductIdReviewController);
export { reviewRouter };
