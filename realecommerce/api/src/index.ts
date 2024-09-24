import express from "express";
import cors from "cors";
import { connectToDataBase } from "./database";
import {
  categoryRouter,
  getMeRouter,
  orderRouter,
  productRouter,
  reviewRouter,
  savedProductsRouter,
  userRouter,
} from "./routes";
import dotenv from "dotenv";
import Multer, { memoryStorage } from "multer";
import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";
import { upload } from "./config/multer";
import { createCloudinaryController } from "./controllers";
import authMiddleware from "./controllers/middleware/auth.middleware";
dotenv.config();

connectToDataBase();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  res.json("Hello world");
});
app.use(authMiddleware);

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/review", reviewRouter);
app.use("/auth", userRouter);
app.use("/users", getMeRouter);
app.use("/savedProducts", savedProductsRouter);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.post("/upload", upload.single("image"), createCloudinaryController); //upload.single("image"), ene bol middleware function

app.listen(3001, () => {
  console.log("Server running http://localhost:3001");
});
