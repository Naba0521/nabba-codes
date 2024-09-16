import { RequestHandler } from "express";
import { reviewModel } from "../../models";

export const createReviewController: RequestHandler = async (req, res) => {
  try {
    await reviewModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(200).json({
      message: "review amljilttai nemegdlee",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Review buruu l nemeed bndaa",
    });
  }
};
