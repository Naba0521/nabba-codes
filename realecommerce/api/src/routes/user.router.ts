import { Router } from "express";
import { createUserController, getUserController } from "../controllers";

const userRouter = Router();
userRouter.get("/", getUserController).post("/", createUserController);
export { userRouter };
