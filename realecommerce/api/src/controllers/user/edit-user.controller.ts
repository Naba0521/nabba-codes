import { RequestHandler } from "express";
import { userModel } from "../../models";

export const editUserController: RequestHandler = async (req, res) => {
  const { _id, newOwog, newUserName, newPhone, newEmail, newAddress } =
    req.body;
  try {
    const result = await userModel.findByIdAndUpdate(
      _id,
      {
        owog: newOwog,
        userName: newUserName,
        phone: newPhone,
        email: newEmail,
        address: newAddress,
      },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "user олдсонгүй" });
    }
    res
      .status(200)
      .json({ message: "Мэдээллийг амжилттай шинэчиллээ", result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "user-г шинэчлэхэд алдаа гарлаа" });
  }
};
