import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const getOrderPackController: RequestHandler = async (req, res) => {
  try {
    const orderPacks = await orderPackModel.find({}).populate({
      path: "orderId",
      populate: { path: "productId" }, // productId-г мөн populate хийж байна
    });

    return res.status(200).json({
      orderPacks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "OrderPacks awahad aldaa garlaa",
    });
  }
};
