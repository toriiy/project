import { Router } from "express";

import { publisherController } from "../controllers/publisher.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { publisherValidator } from "../validators/publisher.validator";

const router = Router();

router.get("/", publisherController.getList);

router.get(
  "/:publisherId",
  commonMiddleware.isIdValid("publisherId"),
  publisherController.getById,
);

router.post(
  "/",
  commonMiddleware.isBodyValid(publisherValidator.create),
  publisherController.createPublisher,
);

router.patch(
  "/:publisherId",
  commonMiddleware.isIdValid("publisherId"),
  commonMiddleware.isBodyValid(publisherValidator.update),
  publisherController.updatePublisher,
);

router.delete(
  "/:publisherId",
  commonMiddleware.isIdValid("publisherId"),
  publisherController.deletePublisher,
);

export const publisherRouter = router;
