import { RequestHandler } from "express";
import { userModel } from "../../models";

export const createUserController: RequestHandler = async (req, res) => {
  try {
    await userModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({
      message: "User nemegdsen",
    });
  } catch (error) {
    res.status(500).json({
      message: "User neg l buruu l nemeed bndaa",
    });
  }
};
