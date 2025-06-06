import { Router } from "express";

import { purchaseController } from "../controllers/purchase.controller";

const router = Router();

router.get("/buy-list", purchaseController.getPurchase);

router.get("/favorites", purchaseController.getFavorite);

router.put("/purchaseId", purchaseController.updatePurchase);

router.delete("/purchaseId", purchaseController.deletePurchase);

router.post("/", purchaseController.createPurchase);

export const purchaseRouter = router;
