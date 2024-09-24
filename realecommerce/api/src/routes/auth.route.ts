// import { Router } from "express";
// import { createUserController, getUserController } from "../controllers";

import { Router } from "express";
import { login } from "../controllers";

// const userRouter = Router();
// userRouter.get("/", getUserController).post("/", createUserController);
// export { userRouter };

const authRouter = Router();
authRouter.post("/", login);
export { authRouter };
