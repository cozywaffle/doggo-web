import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

interface CustomRequest extends Request {
  userId?: string;
}

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET as Secret) as {
        _id: string;
      };

      req.userId = decoded._id;
    } catch (err) {
      console.warn(err);
      res.status(403).json({ message: "Access denied." });
    }
  } else {
    res.status(403).json({ message: "Access denied." });
  }

  next();
};

export default authMiddleware;
