import mongoose from "mongoose";
const { Schema, model } = mongoose;
const orderPackSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: "Shine",
  },
  orderPackPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderId: {
    type: [Schema.Types.ObjectId],
    ref: "Order",
    required: true,
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
export const orderPackModel = model("orderPack", orderPackSchema);
