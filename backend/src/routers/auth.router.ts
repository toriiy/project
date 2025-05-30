import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
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

router.put(
  "/password/change",
  authMiddleware.checkAccessToken,
  authController.changePassword,
);

router.post("/password/forgot", authController.forgotPassword);

router.put(
  "/password/forgot",
  authMiddleware.checkActionToken(ActionTokenTypeEnum.FORGOT_PASSWORD),
  authController.setForgotPassword,
);

router.delete(
  "/sign-out",
  authMiddleware.checkAccessToken,
  authController.signOut,
);

router.delete(
  "/sign-out/all",
  authMiddleware.checkAccessToken,
  authController.signOutAll,
);

export const authRouter = router;
