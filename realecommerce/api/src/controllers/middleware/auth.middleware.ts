import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware: RequestHandler = (req, res, next) => {
  if (
    req.path.startsWith("/auth") ||
    req.path.startsWith("/product") ||
    req.path.startsWith("/category") ||
    req.path.startsWith("/orderPack") ||
    req.path.startsWith("/foosball")
  ) {
    return next(); // энэ бол void буцаана, асуудалгүй
  }

  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return; // **Энд зөвхөн return; гэж бичнэ, res-ийг буцаахгүй**
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    (req as any).user = decoded;

    return next(); // next() бол void буцаана
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(401).json({ error: "Unauthorized" });
    return; // мөн энд зөв return
  }
};

export default authMiddleware;
