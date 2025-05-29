import { RequestHandler } from "express";
import { savedProductsModel } from "../../models/savedProduct.schema";

export const getOneUsersavedProduct: RequestHandler = async (req, res) => {
  try {
    const { userId } = req.query;

    const savedProducts = await savedProductsModel
      .find({ userId })
      .populate("productId"); // Populate productId with Product documents

    res.status(200).json({
      savedProducts,
    });
  } catch (error) {
    console.error("Error fetching saved products:", error);
    res.status(500).json({
      message: "Error fetching saved products",
    });
  }
};
