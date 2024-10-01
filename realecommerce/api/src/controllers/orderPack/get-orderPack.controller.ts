import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const getOrderPackController: RequestHandler = async (req, res) => {
  try {
    const orderPacks = await orderPackModel.find({}).populate({
      path: "products.product", // Populate the product field within the products array
      model: "Product", // Ensure you reference the correct model
    });

    return res.status(200).json({
      orderPacks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Order packs авахад алдаа гарлаа",
    });
  }
};
