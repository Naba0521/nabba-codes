import { RequestHandler } from "express";
import { productModel } from "../../models";

export const getOneProductController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);
    if (!product) {
      res.status(404).json({
        message: "Iim id tai product algaa",
      });
    }
    res.status(200).json({
      product,
    });
  } catch (error) {
    console.log(error);
  }
};
