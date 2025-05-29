import { Request, Response, NextFunction } from "express";
import { userModel } from "../../models/user.schema";

interface CustomRequest extends Request {
  user?: { id: string };
}

export const getMe = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const user = await userModel.findById(req.user.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const userData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      owog: user.owog,
    };

    res.json(userData);
  } catch (error) {
    console.error(error);
    next(error); // алдааг алдааны middleware рүү дамжуулна
  }
};
