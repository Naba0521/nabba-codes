import { RequestHandler } from "express";
import { categoryModel } from "../../models";

export const createCategoryController: RequestHandler = async (req, res) => {
  try {
    const { categoryName } = req.body;
    await categoryModel.create({
      categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json({
      message: "Category nemegdsen",
    });
  } catch (error) {
    res.status(500).json({
      message: "Category buruu l nemeed bndaa",
    });
  }
};
