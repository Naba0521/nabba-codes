import { RequestHandler } from "express";
import { orderPackModel } from "../../models";
import { request } from "http";

export const createOrderPackController: RequestHandler = async (req, res) => {
  try {
    await orderPackModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(201).json({
      message: "orderPack Nemegdlee",
    });
  } catch (error) {
    return res.status(400).json({
      message: "OrderPack buruu l nemeed bndaa",
    });
  }
};
