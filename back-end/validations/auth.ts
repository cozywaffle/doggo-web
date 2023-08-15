import { body } from "express-validator";

export const registerValidation = [
  body("password", "The minimum password length is eight characters!").isLength(
    { min: 8 },
  ),
  body("username", "The minimum username length is two characters!").isLength({
    min: 2,
  }),
  body("login", "The minimum login length is five characters!").isLength({
    min: 5,
  }),
  body("avatarUrl", "There should be a link!").optional().isURL(),
];

export const loginValidation = [
  body("login").isLength({ min: 5 }),
  body("password").isLength({ min: 8 }),
];
