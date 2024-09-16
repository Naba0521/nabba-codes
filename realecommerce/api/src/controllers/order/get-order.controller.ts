import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const getOrderController: RequestHandler = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    return res.status(200).json({
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Orders awahad aldaa garlaa",
    });
  }
};
