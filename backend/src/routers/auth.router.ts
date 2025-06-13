import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { userValidator } from "../validators/user.validator";

const router = Router();

router.post(
  "/sign-in",
  commonMiddleware.isBodyValid(userValidator.signIn),
  authController.signIn,
);

router.post(
  "/sign-up",
  commonMiddleware.isEmailUnique,
  commonMiddleware.isBodyValid(userValidator.create),
  authController.signUp,
);

router.post(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh,
);

router.put(
  "/password/change",
  authMiddleware.checkAccessToken,
  commonMiddleware.isBodyValid(userValidator.changePassword),
  authController.changePassword,
);

router.post(
  "/password/forgot",
  commonMiddleware.isBodyValid(userValidator.forgotPassword),
  authController.forgotPassword,
);

router.put(
  "/password/forgot",
  authMiddleware.checkActionToken(ActionTokenTypeEnum.FORGOT_PASSWORD),
  commonMiddleware.isBodyValid(userValidator.setForgotPassword),
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
