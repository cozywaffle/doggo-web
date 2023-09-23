import { Router } from "express";
import checkAuth from "../utils/authChecker";
import { postValidator } from "../validations/post";
import validErrHandler from "../utils/validErrHandler";
import * as postController from "../controllers/post";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./images");
  },

  filename(req, file, callback) {
    console.log(file);
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const post = Router();

post.get("/", postController.getAll);

post.get("/:id", postController.getOne);

post.post(
  "/",
  checkAuth,
  postValidator,
  validErrHandler,
  upload.single("image"),
  postController.createOne,
);

post.delete("/:id", checkAuth, postController.deleteOne);

post.patch(
  "/:id",
  checkAuth,
  postValidator,
  validErrHandler,
  postController.updateOne,
);

export default post;
