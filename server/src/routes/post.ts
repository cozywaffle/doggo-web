import { Router } from "express";
import checkAuth from "../utils/authChecker";
import { postValidator } from "../validations/post";
import validErrHandler from "../utils/validErrHandler";
import * as postController from "../controllers/post";

const post = Router();

post.get("/", postController.getAll);

post.get("/:id", postController.getOne);

post.post(
  "/",
  checkAuth,
  postValidator,
  validErrHandler,
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
