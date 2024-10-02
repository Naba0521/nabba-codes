import { Router } from "express";
import {
  createUserController,
  editUserController,
  login,
} from "../controllers";

const userRouter = Router();

// Define separate routes for login and signup
userRouter.post("/login", login);
userRouter.post("/signup", createUserController);
userRouter.put("/edit", editUserController);

export { userRouter };
