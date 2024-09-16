import { RequestHandler } from "express";
import { productModel } from "../../models";

export const createProductController: RequestHandler = async (req, res) => {
  try {
    // const {
    //   productName,
    //   category,
    //   price,
    //   description,
    //   size,
    //   images,
    //   quantity,
    //   saledCount,
    //   salePercent,
    //   averageRating,
    //   reviewCount,
    // } = req.body;

    await productModel.create({
      // productName,
      // category,
      // price,
      // description,
      // size,
      // images,
      // quantity,
      // saledCount,
      // salePercent,
      // averageRating,
      // reviewCount,

      ...req.body,
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
