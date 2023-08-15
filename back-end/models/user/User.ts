import mongoose from "mongoose";
import { UserInterface } from "./types";

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    username: {
      type: String,
      require: true,
    },
    login: {
      type: String,
      require: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      require: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", UserSchema);
