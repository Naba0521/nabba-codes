import {
  createUser,
  getUsers,
  login,
} from "../controllers/users.controller.js";
import { Router } from "express";

const usersRouter = Router();

usersRouter
  .post("/login", login)
  .post("/register", createUser)
  .get("/", getUsers);

export { usersRouter };
