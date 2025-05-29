import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const DeleteOrderController: RequestHandler = async (req, res) => {
  const { _id } = req.body; // Extract _id from the request body

  try {
    const result = await orderModel.deleteOne({
      _id, // Query based on the provided _id
    });

    if (result.deletedCount === 0) {
      res.status(404).json({
        message: "Order not found", // Adjusted message for clarity
      });
    }

    res.status(200).json({
      message: "Order successfully removed",
    });
  } catch (error) {
    console.error("Error deleting order:", error); // Log the error for debugging
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
