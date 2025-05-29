import { RequestHandler } from "express";
import { orderPackModel } from "../../models";

export const editOrderPackController: RequestHandler = async (req, res) => {
  const { _id, newStatus } = req.body;
  try {
    const result = await orderPackModel.findByIdAndUpdate(
      _id,
      {
        status: newStatus,
      },
      { new: true }
    );
    if (!result) {
      res.status(404).json({ message: "OrderPack олдсонгүй" });
    }
    res
      .status(200)
      .json({ message: "Мэдээллийг амжилттай шинэчиллээ", result });
  } catch (error) {
    console.error("Error updating OrderPack:", error);
    res.status(500).json({ message: "OrderPack-г шинэчлэхэд алдаа гарлаа" });
  }
};
