import { Router } from "express";

import { commentController } from "../controllers/comment.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { commentValidator } from "../validators/comment.validator";

const router = Router();

router.get("/", commentController.getList);

router.post(
  "/",
  commonMiddleware.isBodyValid(commentValidator.create),
  commentController.createComment,
);

router.post(
  "/:commentId",
  commonMiddleware.isIdValid("commentId"),
  commentController.deleteComment,
);

export const commentRouter = router;
