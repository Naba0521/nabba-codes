import { RequestHandler } from "express";
import { productModel, reviewModel } from "../../models";

export const createReviewController: RequestHandler = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.productId);
    const { productId, comment, rating } = req.body;

    await reviewModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!product) return;
    await productModel.findOneAndUpdate(
      { _id: req.body.productId },
      { $inc: { reviewCount: 1 } },
      { new: true }
    );
    const reviews = await reviewModel.find({ productId });
    const validReviews = reviews.filter((review) => review.rating != null);
    const totalRating = validReviews.reduce(
      (acc, review) => acc + review.rating!,
      0
    );
    const averageRating =
      validReviews.length > 0 ? totalRating / validReviews.length : 0;

    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: productId },
      { averageRating: averageRating },
      { new: true }
    );
    return res.status(200).json({
      message: "review amljilttai nemegdlee",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Review buruu l nemeed bndaa",
    });
  }
};
