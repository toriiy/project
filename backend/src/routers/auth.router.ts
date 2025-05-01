import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.post("/sign-in", authController.signIn);

router.post("/sign-up", commonMiddleware.isEmailUnique, authController.signUp);

export const authRouter = router;
