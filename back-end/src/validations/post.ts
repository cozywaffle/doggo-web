import { body } from "express-validator";

export const postValidator = [
  body("title", "Title must contain minimum 1 character!").isLength({ min: 1 }),
  body("text", "Your Text must contain minimum 1 character!").isLength({
    min: 1,
  }),
  body("tags").optional().isArray(),
  body("imageUrl").optional().isURL(),
];
