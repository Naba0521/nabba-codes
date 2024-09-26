// import { RequestHandler } from "express";
// import { orderModel } from "../../models";

// export const createOrderController: RequestHandler = async (req, res) => {
//   try {
//     await orderModel.create({
//       ...req.body,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });
//     return res.status(201).json({
//       message: "Order Nemegdlee",
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: "Order buruu l nemeed bndaa",
//     });
//   }
// };
import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const createOrderController: RequestHandler = async (req, res) => {
  const { productId, userId } = req.body; // Extract productId and userId from the request body

  try {
    // Check if an order with the same productId and userId already exists
    const existingOrder = await orderModel.findOne({ productId, userId });

    if (existingOrder) {
      // If an order exists, return a conflict status
      return res.status(409).json({
        message: "Энэ бүтээгдэхүүн аль хэдийн захиалгад байгаа.",
      });
    }

    // Create a new order
    await orderModel.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: "Захиалга амжилттай нэмэгдлээ.",
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(400).json({
      message: "Захиалга буруу байна.",
    });
  }
};
