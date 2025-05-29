import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const EditCountOrderController: RequestHandler = async (req, res) => {
  const { _id, newCount } = req.body; // Extract order ID and new count from the request body
  try {
    const result = await orderModel.findByIdAndUpdate(
      _id,
      { count: newCount },
      { new: true } //  the updated document
    );
    if (!result) {
      res.status(404).json({ message: "Захиалга олдсонгүй" });
    }
    res.status(200).json({ message: "Тоог амжилттай шинэчиллээ", result });
  } catch (error) {
    console.error("Error updating order count:", error);
    res.status(500).json({ message: "Захиалгын тоог шинэчлэхэд алдаа гарлаа" });
  }
};

// import { RequestHandler } from "express";
// import { orderModel } from "../../models";

// export const EditCountOrderController: RequestHandler = async (req, res) => {
//   const ordersToUpdate = req.body; // Массивын өгөгдөл ([_id, newCount])

//   try {
//     // Захиалгуудыг нэг дор шинэчлэх
//     for (const order of ordersToUpdate) {
//       const { _id, newCount } = order; // Массивын нэг захиалгыг задлах
//       await orderModel.updateOne(
//         { _id }, // Захиалгын _id-гээр хайх
//         { $set: { count: newCount } } // count-г шинэ утгаараа шинэчлэх
//       );
//     }

//     res
//       .status(200)
//       .json({ message: "Захиалгуудын тоо хэмжээ амжилттай шинэчлэгдлээ" });
//   } catch (error) {
//     res.status(500).json({ message: "Алдаа гарлаа", error });
//   }
// };
