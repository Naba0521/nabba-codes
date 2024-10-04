import { RequestHandler } from "express";
import { productModel } from "../../models";

export const DeleteProductController: RequestHandler = async (req, res) => {
  const { _id } = req.body;
  try {
    const result = await productModel.deleteOne({ _id });
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "product not found", // Adjusted message for clarity
      });
    }
    return res.status(200).json({
      message: "product successfully removed",
    });
  } catch (error) {
    console.error("Error deleting product:", error); // Log the error for debugging
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
