import mongoose from "mongoose";
import { UserInterface } from "./types";

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    username: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", UserSchema);
