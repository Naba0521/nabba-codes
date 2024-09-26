import { RequestHandler } from "express";
import { orderModel } from "../../models";

export const EditCountOrderController: RequestHandler = async (req, res) => {
  const { _id, newCount } = req.body; // Захиалгын _id болон шинэ count-ийг авна
  try {
    // Захиалгын тоо хэмжээг шинэчлэнэ
    const result = await orderModel.findByIdAndUpdate(
      _id, // Тухайн _id-ээр захиалгыг хайна
      { count: newCount }, // Захиалгын шинэ count-ийг оруулна
      { new: true } // Шинэчлэгдсэн мэдээллийг буцаана
    );

    if (!result) {
      return res.status(404).json({ message: "Захиалга олдсонгүй" });
    }

    res
      .status(200)
      .json({ message: "Захиалгын тоо амжилттай шинэчлэгдлээ", result });
  } catch (error) {
    console.error("Алдаа гарлаа:", error);
    res.status(500).json({ message: "Алдаа гарлаа" });
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
