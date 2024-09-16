import { RequestHandler } from "express";
import { userModel } from "../../models";

export const getUserController: RequestHandler = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "user awahad aldaatai l bndaa",
    });
  }
};
