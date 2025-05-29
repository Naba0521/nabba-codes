import { RequestHandler } from "express";
import { foosBallModel } from "../../models/foosBall.schema";

export const createFoosballController: RequestHandler = async (req, res) => {
  try {
    const { memberNames } = req.body;
    await foosBallModel.create({
      memberNames,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(201).json({
      message: "memberNames nemegdsen",
    });
  } catch (error) {
    return res.status(500).json({
      message: "memberNames buruu l nemeed bndaa",
    });
  }
};
