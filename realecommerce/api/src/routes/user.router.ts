import { Router } from "express";
import { createUserController, login } from "../controllers";

const userRouter = Router();
userRouter.post("/", login).post("/", createUserController);
export { userRouter };
