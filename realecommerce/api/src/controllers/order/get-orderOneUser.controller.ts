import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const getOneUserOrder: RequestHandler = async (req, res) => {
  try {
    const { userId } = req.query;
    const orders = await orderModel.find({ userId }).populate("productId");
    return res.status(200).json({
      orders,
    });
  } catch (error) {
    console.error("Error fetching saved products:", error);
    return res.status(500).json({
      message: "Error fetching saved products",
    });
  }
};
