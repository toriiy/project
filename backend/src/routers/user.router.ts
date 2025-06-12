import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { userValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.get("/me", authMiddleware.checkAccessToken, userController.getUser);

router.delete(
  "/me",
  authMiddleware.checkAccessToken,
  userController.deleteUser,
);

router.put(
  "/me",
  authMiddleware.checkAccessToken,
  commonMiddleware.isBodyValid(userValidator.update),
  userController.updateUser,
);

export const userRouter = router;
