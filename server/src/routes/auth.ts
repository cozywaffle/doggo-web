import express from "express";
import "dotenv/config";

import { registerValidation, loginValidation } from "../validations/auth";
import validErrHandler from "../utils/validErrHandler";
import checkAuth from "../utils/authChecker";
import * as authController from "../controllers/auth";

const router = express.Router();

router.post(
  "/reg",
  registerValidation,
  validErrHandler,
  authController.createOne,
);

router.post("/login", loginValidation, validErrHandler, authController.login);

router.get("/me", checkAuth, authController.getOne);

router.patch("/me", checkAuth, authController.changeOne);

export default router;
