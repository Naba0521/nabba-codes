import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const getOneUserOrderPackController: RequestHandler = async (
  req,
  res
) => {
  try {
    const { userId } = req.query;
    const orderPacks = await orderPackModel.find({ userId }).populate([
      {
        path: "products.product", // Populate the product field within the products array
        model: "Product", // Ensure you reference the correct model
      },
      {
        path: "userId", // Populate the userId field
        model: "User", // Ensure you reference the correct model for users
      },
    ]);
    return res.status(200).json({
      orderPacks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Order packs авахад алдаа гарлаа",
    });
  }
};
