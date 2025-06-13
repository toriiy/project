import { NextFunction, Request, Response } from "express";

import {
  commonPurchaseType,
  IPurchaseQuery,
} from "../interfaces/purchase.interface";
import { ITokenPayload } from "../interfaces/token.interface";
import { purchaseService } from "../services/purchase.service";

class PurchaseController {
  public async getPurchaseList(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = req.query as unknown as IPurchaseQuery;
      const result = await purchaseService.getPurchaseList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getFavoriteList(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = req.query as unknown as IPurchaseQuery;
      const result = await purchaseService.getFavoriteList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getMyPurchase(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await purchaseService.getMyPurchase(tokenPayload.userId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getMyFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await purchaseService.getMyFavorite(tokenPayload.userId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createPurchase(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as commonPurchaseType;
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const bookId = req.params as unknown as string;
      const result = await purchaseService.createPurchase(
        dto,
        tokenPayload.userId,
        bookId,
      );
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
      const dto = req.body as commonPurchaseType;
      const purchaseId = req.params as unknown as string;
      const result = await purchaseService.updatePurchase(dto, purchaseId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}

export const purchaseController = new PurchaseController();
