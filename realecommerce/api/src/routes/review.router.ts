import { Router } from "express";
import { createReviewController, getReviewController } from "../controllers";

const reviewRouter = Router();
reviewRouter.get("/", getReviewController).post("/", createReviewController);
export { reviewRouter };
