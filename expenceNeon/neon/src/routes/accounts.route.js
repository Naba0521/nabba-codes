import {
  getAllAccounts,
  createAccount,
  deleteAccount,
} from "../controllers/accounts.controller.js";
import { Router } from "express";

const accountsRouter = Router();

accountsRouter
  .get("/", getAllAccounts)
  .post("/", createAccount)
  .delete("/:id", deleteAccount);

export { accountsRouter };
