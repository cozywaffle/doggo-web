import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user/User";
import { UserInterface } from "../models/user/types";
import { Request, Response } from "express";
import "dotenv/config";
import secret_key from "../config";

import { registerValidation, loginValidation } from "../validations/auth";
import validErrHandler from "../utils/validErrHandler";

const router = express.Router();

router.post(
  "/reg",
  registerValidation,
  validErrHandler,
  async (req: Request, res: Response) => {
    try {
      const password = req.body.password;

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hash(password, salt);

      const doc = new UserModel<UserInterface>({
        login: req.body.login,
        username: req.body.username,
        avatarUrl: req.body.avatarUrl,
        passwordHash: (await hash).toString(),
      });

      const user = await doc.save();

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.SECRET || secret_key,
        {
          expiresIn: "31d",
        },
      );

      const { passwordHash, ...REST } = user._doc;

      return res.json({
        REST,
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to register :/" });
    }
  },
);

router.post(
  "/login",
  loginValidation,
  validErrHandler,
  async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findOne({ login: req.body.login });

      if (!user) {
        return res
          .status(400)
          .json({ message: "Incorrect password of login!" });
      }

      const isValid = await bcrypt.compare(
        req.body.password,
        user._doc.passwordHash,
      );

      if (!isValid) {
        return res.status(404).json({
          message: "Incorrect password of login!",
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.SECRET || secret_key,
        {
          expiresIn: "31d",
        },
      );

      const { passwordHash, ...REST } = user._doc;

      return res.json({
        REST,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to login :/",
      });
    }
  },
);

export default router;
