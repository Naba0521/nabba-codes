import { RequestHandler } from "express";
import { foosBallModel } from "../../models/foosBall.schema";

export const getFoosballController: RequestHandler = async (_req, res) => {
  try {
    const memberNames = await foosBallModel.find({});
    res.status(200).json({
      memberNames,
    });
  } catch (error) {
    res.status(500).json({
      message: "memberNames Awahad asuudaltai l bndaa",
    });
  }
};
