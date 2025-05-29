import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const getOneOrderPackController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const orderPack = await orderPackModel.findById(id).populate([
      {
        path: "products.product", // Populate the product field within the products array
        model: "Product", // Ensure you reference the correct model
      },
      {
        path: "userId", // Populate the userId field
        model: "User", // Ensure you reference the correct model for users
      },
    ]);
    if (!orderPack) {
      res.status(404).json({
        message: "Iim id tai orderPack algaa",
      });
    }
    res.status(200).json({
      orderPack,
    });
  } catch (error) {
    console.log(error);
  }
};
