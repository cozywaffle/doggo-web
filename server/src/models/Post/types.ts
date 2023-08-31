import mongoose from "mongoose";

export interface UserInterface {
  title: string;
  text: string;
  imageUrl?: string;
  tags?: string[];
  viewsCount: number;
  user: mongoose.Schema.Types.ObjectId;
}
