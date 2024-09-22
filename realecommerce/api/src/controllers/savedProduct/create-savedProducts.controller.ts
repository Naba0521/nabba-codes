import { RequestHandler } from "express";
import { savedProductsModel } from "../../models/savedProduct.schema";

export const CreateSavedProductsController: RequestHandler = async (
  req,
  res
) => {
  try {
    await savedProductsModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(201).json({
      message: "Saved Product nemegdsen",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Saved Product buruu l nemeed bndaa",
    });
  }
};
