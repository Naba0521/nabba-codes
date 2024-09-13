import { RequestHandler } from "express";
import { productModel } from "../../models";

export const createProductController: RequestHandler = async (req, res) => {
  try {
    const { productName, category, price } = req.body;
    await productModel.create({
      productName,
      category,
      price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(201).json({
      message: "Product nemegdlee",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product buruu l nemeed bndaa",
    });
  }
};
