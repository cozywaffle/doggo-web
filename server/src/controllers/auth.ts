import { Request, Response } from "express";
import { UserInterface } from "../models/User/types";
import UserModel from "../models/User/User";
import PostModel from "../models/Post/Post";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";

interface CustomRequest extends Request {
  userId?: string;
}

export const createOne = async (req: Request, res: Response) => {
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
      process.env.SECRET as Secret,
      {
        expiresIn: "31d",
      },
    );

    const { passwordHash, ...data } = user._doc;

    return res.json({
      data,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to register :/" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ login: req.body.login });

    if (!user) {
      return res.status(400).json({ message: "Incorrect password of login!" });
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
      process.env.SECRET as Secret,
      {
        expiresIn: "31d",
      },
    );

    const { passwordHash, ...data } = user._doc;

    return res.json({
      data,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to login :/",
    });
  }
};

export const getOne = async (req: CustomRequest, res: Response) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User is not found" });
    }

    const posts = await PostModel.find({ user });

    const userData = user;

    return res.json({
      userData,
      posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Access denied." });
  }
};

export const changeOne = async (req: CustomRequest, res: Response) => {
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.body._id },
      { avatarUrl: req.body.avatarUrl },
    )
      .then(data => {
        res.json({ data });
      })
      .catch((err: Error) => {
        res.status(400).json({ message: "Couldn't update profile picture!" });
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ message: "Iternal server error!" });
    console.log(err);
  }
};
