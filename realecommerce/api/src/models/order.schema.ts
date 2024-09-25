import mongoose from "mongoose";

const { Schema, model } = mongoose;
const orderSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: "Sags",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },
  size: {
    type: String,
    required: true,
    default: "10XL",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
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
export const orderModel = model("Order", orderSchema);
