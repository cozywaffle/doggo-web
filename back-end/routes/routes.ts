import express from "express";
import User from "../models/User";

const router = express.Router();

router.post("/reg", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
