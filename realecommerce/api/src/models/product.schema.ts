import mongoose from "mongoose";
const { Schema, model } = mongoose;
const productSchema = new Schema({
  category: {
    type: [Schema.Types.ObjectId],
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
  description: {
    type: String,
    required: true,
    default: "Not in description",
  },
  size: {
    type: [String],
    required: true,
    default: "10XL",
  },
  image: {
    type: [String],
    required: true,
    default: "/img1.png",
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  saledCount: {
    type: Number,
    required: true,
    default: 0,
  },
  salePercent: {
    type: Number,
    required: true,
    default: 0,
  },
  averageRating: {
    type: Number,
    required: false,
  },
  reviewCount: {
    type: Number,
    required: false,
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
