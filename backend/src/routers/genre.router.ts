import { Router } from "express";

import { genreController } from "../controllers/genre.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { genreValidator } from "../validators/genre.validator";

const router = Router();

router.get("/", genreController.getList);

router.get(
  "/:genreId",
  commonMiddleware.isIdValid("genreId"),
  genreController.getById,
);

router.post(
  "/",
  commonMiddleware.isBodyValid(genreValidator.create),
  genreController.createGenre,
);

router.patch(
  "/:genreId",
  commonMiddleware.isIdValid("genreId"),
  commonMiddleware.isBodyValid(genreValidator.update),
  genreController.updateGenre,
);

router.delete(
  "/:genreId",
  commonMiddleware.isIdValid("genreId"),
  genreController.deleteGenre,
);

export const genreRouter = router;
