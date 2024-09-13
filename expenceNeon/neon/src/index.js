import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import {
  accountsRouter,
  usersRouter,
  categoriesRouter,
  userRouter,
} from "./routes/index.js";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use("/accounts", accountsRouter);
app.use("/auth", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
