import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const createOrderController: RequestHandler = async (req, res) => {
  try {
    await orderModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(201).json({
      message: "Order Nemegdlee",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Order buruu l nemeed bndaa",
    });
  }
};
