import { RequestHandler } from "express";
import { savedProductsModel } from "../../models/savedProduct.schema";

export const getSavedProductsController: RequestHandler = async (req, res) => {
  try {
    const savedProducts = await savedProductsModel
      .find({})
      .populate("productId") // Populate productId with Product documents
      .populate("userId"); // Populate userId with User documents

    return res.status(200).json({
      savedProducts,
    });
  } catch (error) {
    console.error("Error fetching saved products:", error);
    return res.status(500).json({
      message: "Error fetching saved products",
    });
  }
};
