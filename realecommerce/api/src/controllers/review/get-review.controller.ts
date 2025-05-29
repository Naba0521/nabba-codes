import { RequestHandler } from "express";
import { reviewModel } from "../../models";

export const getReviewController: RequestHandler = async (req, res) => {
  try {
    const reviews = await reviewModel.find({});
    res.status(200).json({
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Reviews awahad aldaa garlaa",
    });
  }
};
