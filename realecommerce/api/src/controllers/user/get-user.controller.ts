import { RequestHandler } from "express";
import { userModel } from "../../models/user.schema";
const jwt = require("jsonwebtoken");

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };
  console.log(req.body);

  const user = await userModel.findOne({ email, password });

  console.log(user);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      username: user.userName,
      email: user.email,
      id: user._id,
    },
    process.env.JWT_SECRET as string
  );

  return res.status(200).json({
    token,
    user: {
      username: user.userName,
      email: user.email,
      id: user._id,
    },
  });
};

export { login };
