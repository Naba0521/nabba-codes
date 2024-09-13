import mongoose from "mongoose";
const { Schema, model } = mongoose;
const productSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", //ene utgaar nogoo model deer nerlesen nereer n bi categorytoi holboltoo hiij ogch bga
    required: true,
  },
  productName: {
    type: String,
    required: true,
    default: "No Name Added",
  },
  price: {
    type: Number,
    required: true,
    default: 247,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export const productModel = model("Product", productSchema);
