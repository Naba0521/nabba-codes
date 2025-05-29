import { RequestHandler } from "express";
import { foosBallModel } from "../../models/foosBall.schema";

export const getFoosballController: RequestHandler = async (req, res) => {
  try {
    const memberNames = await foosBallModel.find({});
    return res.status(200).json({
      memberNames,
    });
  } catch (error) {
    return res.status(500).json({
      message: "memberNames Awahad asuudaltai l bndaa",
    });
  }
};
