import { RequestHandler } from "express";
import { reviewModel } from "../../models";

export const getProductIdReviewController: RequestHandler = async (
  req,
  res
) => {
  const { productId } = req.params;

  try {
    const reviews = await reviewModel.find({ productId });
    if (!reviews || reviews.length === 0) {
      return res.status(404).json({
        message: "No reviews found for this product",
      });
    }
    return res.status(200).json({
      reviews,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching reviews",
    });
  }
};
