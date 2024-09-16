import express from "express";
import cors from "cors";
import { connectToDataBase } from "./database";
import {
  categoryRouter,
  orderRouter,
  productRouter,
  reviewRouter,
  userRouter,
} from "./routes";

connectToDataBase();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  res.json("Hello world");
});
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/review", reviewRouter);
app.use("/user", userRouter);
app.listen(3001, () => {
  console.log("Server running http://localhost:3001");
});
