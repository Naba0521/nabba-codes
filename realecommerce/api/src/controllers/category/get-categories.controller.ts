import { RequestHandler } from "express";
import { categoryModel } from "../../models";

export const getCategoriesController: RequestHandler = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).json({
      categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Category Awahad asuudaltai l bndaa",
    });
  }
};
