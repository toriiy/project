import { Router } from "express";

import { categoryController } from "../controllers/category.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { categoryValidator } from "../validators/category.validator";

const router = Router();

router.get("/", categoryController.getList);

router.get(
  "/:categoryId",
  commonMiddleware.isIdValid("categoryId"),
  categoryController.getById,
);

router.post(
  "/",
  commonMiddleware.isBodyValid(categoryValidator.create),
  categoryController.createCategory,
);

router.patch(
  "/:categoryId",
  commonMiddleware.isIdValid("categoryId"),
  commonMiddleware.isBodyValid(categoryValidator.update),
  categoryController.updateCategory,
);

router.delete(
  "/:categoryId",
  commonMiddleware.isIdValid("categoryId"),
  categoryController.deleteCategory,
);

export const categoryRouter = router;
