import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
// import { userValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.post(
  "/",
  // commonMiddleware.isBodyValid(userValidator.create),
  commonMiddleware.isEmailUnique,
  userController.createUser,
);

router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.deleteUser,
);

router.put(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  // commonMiddleware.isBodyValid(userValidator.update),
  userController.updateUser,
);

export const userRouter = router;
