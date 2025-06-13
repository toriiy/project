import { Router } from "express";

import { bookController } from "../controllers/book.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { bookValidator } from "../validators/book.validator";

const router = Router();

router.get("/", bookController.getList);

router.get(
  "/:bookId",
  commonMiddleware.isIdValid("bookId"),
  bookController.getById,
);

router.post(
  "/",
  commonMiddleware.isBodyValid(bookValidator.common),
  bookController.createBook,
);

router.delete(
  "/:bookId",
  commonMiddleware.isIdValid("bookId"),
  bookController.deleteBook,
);

router.put(
  "/:bookId",
  commonMiddleware.isIdValid("bookId"),
  commonMiddleware.isBodyValid(bookValidator.common),
  bookController.updateBook,
);

export const bookRouter = router;
