import { RequestHandler } from "express";
import { savedProductsModel } from "../../models/savedProduct.schema";

export const DeleteSavedProductController: RequestHandler = async (
  req,
  res
) => {
  const { productId, userId } = req.body; // Extract productId and userId from the request body

  try {
    const result = await savedProductsModel.deleteOne({
      productId, // Ensure you're querying based on productId
      userId, // Include userId to ensure the correct user's product is deleted
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Saved product not found",
      });
    }

    return res.status(200).json({
      message: "Saved product successfully removed",
    });
  } catch (error) {
    console.error("Error deleting saved product:", error); // Log the error for debugging
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
