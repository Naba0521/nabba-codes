import { RequestHandler } from "express";
import { productModel } from "../../models";

export const editProductController: RequestHandler = async (req, res) => {
  const { _id, newPrice, newProductName, newQuantity } = req.body;
  try {
    const result = await productModel.findByIdAndUpdate(
      _id,
      {
        price: newPrice,
        productName: newProductName,
        quantity: newQuantity,
      },
      { new: true }
    );
    if (!result) {
      res.status(404).json({ message: "product олдсонгүй" });
    }
    res
      .status(200)
      .json({ message: "Мэдээллийг амжилттай шинэчиллээ", result });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "product-г шинэчлэхэд алдаа гарлаа" });
  }
};
