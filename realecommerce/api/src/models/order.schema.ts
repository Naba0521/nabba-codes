import mongoose from "mongoose";

const { Schema, model } = mongoose;
const orderSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: "New",
  },
  productIds: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
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
