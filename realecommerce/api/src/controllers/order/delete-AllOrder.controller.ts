import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const DeleteAllOrderController: RequestHandler = async (req, res) => {
  const { userId } = req.body; // Extract userId from the request body

  try {
    // Delete all orders for the specified userId
    const result = await orderModel.deleteMany({ userId });

    if (result.deletedCount === 0) {
      res.status(404).json({
        message: "No orders found for this user", // Clear message if no orders are found
      });
    }

    res.status(200).json({
      message: `${result.deletedCount} orders successfully removed`, // Provide feedback on how many orders were deleted
    });
  } catch (error) {
    console.error("Error deleting orders:", error); // Log the error for debugging
    res.status(500).json({
      message: "Internal server error", // General error response
    });
  }
};
