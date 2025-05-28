import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.post("/sign-in", authController.signIn);

router.post("/sign-up", commonMiddleware.isEmailUnique, authController.signUp);

router.post(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh,
);

router.post(
  "/change-password",
  authMiddleware.checkAccessToken,
  authController.changePassword,
);

export const authRouter = router;
