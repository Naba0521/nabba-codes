import { RequestHandler } from "express";
import { userModel } from "../../models/user.schema";
import jwt from "jsonwebtoken";

const login: RequestHandler = async (req, res): Promise<void> => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  const user = await userModel.findOne({ email, password });

  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
    return; // Энэ чухал! Response явсаны дараа гарах
  }

  const token = jwt.sign(
    {
      id: user._id,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      owog: user.owog,
      role: user.role,
    },
    process.env.JWT_SECRET as string
  );

  res.status(200).json({
    token,
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      owog: user.owog,
      role: user.role,
    },
  });
  return; // Эцсийн return, илүүдэл ч байж болно
};

export { login };
