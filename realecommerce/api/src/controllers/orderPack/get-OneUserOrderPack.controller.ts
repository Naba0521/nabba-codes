import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const getOneUserOrderPackController: RequestHandler = async (
  req,
  res
) => {
  try {
    const { userId } = req.query;

    const orderPacks = await orderPackModel.find({ userId }).populate([
      {
        path: "products.product",
        model: "Product",
      },
      {
        path: "userId",
        model: "User",
      },
    ]);

    // res.json дуудаад return-гүйгээр функц дуусгаж байна
    res.status(200).json({ orderPacks });
  } catch (error) {
    res.status(500).json({ message: "Order packs авахад алдаа гарлаа" });
  }
};
