import { RequestHandler } from "express";
import { productModel } from "../../models";

export const getProductsController: RequestHandler = async (req, res) => {
  try {
    const { page, limit, selectedCategory, size } = req.query;

    const filter: any = {};

    // Add category filter if categories are selected
    if (selectedCategory?.length) {
      filter.category = { $in: selectedCategory };
    }

    // Add size filter if size is selected
    if (size) {
      filter.size = { $in: [size] };
    }

    const products = await productModel
      .find(filter)
      .populate("category")
      .limit(Number(limit))
      .skip((Number(page) - 1) * 6);

    const totalCount = await productModel.countDocuments(filter);

    return res.status(200).json({
      products,
      totalCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product awahad aldaatai l bndaa",
    });
  }
};
