import { Schema, model } from "mongoose";

interface UserInterface {
  login: string;
  password: string;
  avatarUrl: string;
}

const userSchema = new Schema<UserInterface>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  avatarUrl: { type: String, required: false },
});

const User = model("User", userSchema);

export default User;
