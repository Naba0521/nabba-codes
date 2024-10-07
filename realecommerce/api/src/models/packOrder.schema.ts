import mongoose from "mongoose";
const { Schema, model } = mongoose;
const orderPackSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: "Shine",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  owog: {
    type: String,
    required: true,
    default: "Овог оруулаагүй байна",
  },
  userName: {
    type: String,
    required: true,
    default: "Нэр оруулаагүй байна",
  },
  phoneNumber: {
    type: String,
    required: true,
    default: "Утасны дугаар оруулаагүй байна",
  },
  orderPackAdress: {
    type: String,
    required: true,
    default: "Хүргэлтийн дэлгэрэнгүй хаяг",
  },
  orderPackDetail: {
    type: String,
    required: true,
    default: "Дэлгэрэнгүй мэдээлэл",
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      selectedSize: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
export const orderPackModel = model("orderPack", orderPackSchema);
