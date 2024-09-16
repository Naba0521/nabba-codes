import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({});
export const userModel = model("User", userSchema);
