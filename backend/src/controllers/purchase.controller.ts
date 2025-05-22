import { NextFunction, Request, Response } from "express";

import {
  createPurchaseType,
  IPurchaseQuery,
  updatePurchaseType,
} from "../interfaces/purchase.interface";
import { purchaseService } from "../services/purchase.service";

class PurchaseController {
  public async getPurchase(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IPurchaseQuery;
      const result = await purchaseService.getPurchase(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IPurchaseQuery;
      const result = await purchaseService.getFavorite(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createPurchase(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as createPurchaseType;
      const result = await purchaseService.createPurchase(dto);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deletePurchase(req: Request, res: Response, next: NextFunction) {
    try {
      const purchaseId = req.params as unknown as string;
      const result = await purchaseService.deletePurchase(purchaseId);
      res.json(result).status(204);
    } catch (e) {
      next(e);
    }
  }

  public async updatePurchase(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as updatePurchaseType;
      const purchaseId = req.params as unknown as string;
      const result = await purchaseService.updatePurchase(dto, purchaseId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}

export const purchaseController = new PurchaseController();
