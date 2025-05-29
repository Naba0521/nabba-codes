import { Router } from "express";

import {
  createFoosballController,
  getFoosballController,
} from "../controllers/foosBalll";

const foosBallRouter = Router();

foosBallRouter
  .post("/", createFoosballController)
  .get("/", getFoosballController);

export { foosBallRouter };
