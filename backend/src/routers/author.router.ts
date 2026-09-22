import { Router } from "express";

import { authorController } from "../controllers/author.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { authorValidator } from "../validators/author.validator";

const router = Router();

router.get("/", authorController.getList);

router.get(
  "/:authorId",
  commonMiddleware.isIdValid("authorId"),
  authorController.getById,
);

router.post(
  "/",
  commonMiddleware.isBodyValid(authorValidator.create),
  authorController.createAuthor,
);

router.patch(
  "/:authorId",
  commonMiddleware.isIdValid("authorId"),
  commonMiddleware.isBodyValid(authorValidator.update),
  authorController.updateAuthor,
);

router.delete(
  "/:authorId",
  commonMiddleware.isIdValid("authorId"),
  authorController.deleteAuthor,
);

export const authorRouter = router;
