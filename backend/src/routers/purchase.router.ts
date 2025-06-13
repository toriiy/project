import { Router } from "express";

import { purchaseController } from "../controllers/purchase.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { purchaseValidator } from "../validators/purchase.validator";

const router = Router();

router.get(
  "/buy-list",
  authMiddleware.checkAccessToken,
  purchaseController.getPurchaseList,
);

router.get(
  "/favorites",
  authMiddleware.checkAccessToken,
  purchaseController.getFavoriteList,
);

router.get(
  "/buy-list/my",
  authMiddleware.checkAccessToken,
  purchaseController.getMyPurchase,
);

router.get(
  "/favorites/my",
  authMiddleware.checkAccessToken,
  purchaseController.getMyFavorite,
);

router.post(
  "/:bookId",
  commonMiddleware.isIdValid("bookId"),
  authMiddleware.checkAccessToken,
  commonMiddleware.isBodyValid(purchaseValidator.common),
  purchaseController.createPurchase,
);

router.put(
  "/:purchaseId",
  commonMiddleware.isIdValid("purchaseId"),
  authMiddleware.checkAccessToken,
  commonMiddleware.isBodyValid(purchaseValidator.common),
  purchaseController.updatePurchase,
);

router.delete(
  "/:purchaseId",
  commonMiddleware.isIdValid("purchaseId"),
  authMiddleware.checkAccessToken,
  purchaseController.deletePurchase,
);

export const purchaseRouter = router;
