import { Router } from "express";
import { createUserController, login } from "../controllers";

const userRouter = Router();

// Define separate routes for login and signup
userRouter.post("/login", login);
userRouter.post("/signup", createUserController);

export { userRouter };
