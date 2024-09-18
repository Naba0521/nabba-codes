import { RequestHandler } from "express";
import { productModel } from "../../models";

export const getProductsController: RequestHandler = async (req, res) => {
  try {
    const products = await productModel.find({}).populate("category");
    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product awahad aldaatai l bndaa",
    });
  }
};
