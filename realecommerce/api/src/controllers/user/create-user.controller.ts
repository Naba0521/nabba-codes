import { RequestHandler } from "express";
import { userModel } from "../../models";

export const createUserController: RequestHandler = async (req, res) => {
  try {
    await userModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {}
};
