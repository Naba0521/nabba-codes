import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const getOneOrderPackController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const orderPack = await orderPackModel.findById(id);
    if (!orderPack) {
      return res.status(404).json({
        message: "Iim id tai orderPack algaa",
      });
    }
    return res.status(200).json({
      orderPack,
    });
  } catch (error) {
    console.log(error);
  }
};
