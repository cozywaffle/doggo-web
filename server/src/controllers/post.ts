import { Request, Response } from "express";
import PostModel from "../models/Post/Post";
import { UserInterface } from "../models/User/types";

interface CustomRequest extends Request {
  userId?: string;
}

export const getAll = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.find().populate<UserInterface>("user").exec();

    if (!posts) {
      return res.status(500).json({
        message: "Can't find posts :/ Try to find later.",
      });
    }

    res.json(posts);
  } catch (err) {
    return res.status(500).json({
      message: "Couldn't load posts! :/",
    });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      },
    )
      .populate("user")
      .then(post => {
        return res.json(post);
      })
      .catch(err => {
        console.warn(err);
        return res.status(404).json({ message: "Couldn't find the post :/" });
      });
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: "Couldn't load the post :/" });
  }
};

export const createOne = async (req: CustomRequest, res: Response) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      viewsCount: req.body.viewsCount,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.warn(err);
    return res.status(500).json({
      message: "Failed to create a post :/",
    });
  }
};

export const deleteOne = async (req: CustomRequest, res: Response) => {
  try {
    await PostModel.findOneAndDelete({
      _id: req.params.id,
    })
      .then(post => {
        if (!post) {
          return res.status(500).json({ message: "Couldn't find the post :/" });
        }

        res.json({
          success: true,
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({
          message: "Failed to delete post!",
        });
      });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Couldn't delete the post." });
  }
};

export const updateOne = async (req: CustomRequest, res: Response) => {
  try {
    await PostModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
        tags: req.body.tags,
      },
    );

    res.json({ success: true });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Couldn't update your post!" });
  }
};
