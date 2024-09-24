import { RequestHandler } from "express";
import { userModel } from "../../models";
import dotenv from "dotenv";

dotenv.config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET as string;
const getmeController: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.split("")[1];
    if (!token) {
      return res.status(401).json({ message: "Токен байхгүй байна." });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    const user = await userModel.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "Хэрэглэгч олдсонгүй." });
    }
    return res.status(200).json({
      user: {
        id: user._id,
        username: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Токеныг шалгах алдаа:", error);
    return res.status(500).json({ message: "Серверт алдаа гарлаа." });
  }
};
export { getmeController };
