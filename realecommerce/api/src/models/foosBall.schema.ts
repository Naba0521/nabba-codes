import mongoose from "mongoose";
const { Schema, model } = mongoose;
const foosBallSchema = new Schema({
  memberNames: {
    type: [String],
    required: true,
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
export const foosBallModel = model("Foosball", foosBallSchema); //deer vvsgesen schemagiinhaa tuslamjtai shine model vvsgej bna
