import { FilterQuery } from "mongoose";

import { OrderEnum } from "../enums/order.enum";
import { PurchaseEnum } from "../enums/purchase.enum";
import { SortPurchaseEnum } from "../enums/sort.enum";
import {
  commonPurchaseType,
  IPurchase,
  IPurchaseQuery,
} from "../interfaces/purchase.interface";
import { Purchase } from "../models/purchase.model";

class PurchaseRepository {
  public async getPurchaseList(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    const filterObj: FilterQuery<IPurchase> = {
      status: PurchaseEnum.IN_PROGRESS,
    };

    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortPurchaseEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Purchase.find(filterObj)
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Purchase.countDocuments(filterObj),
    ]);

    return { entities, total };
  }

  public async getFavoriteList(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    const filterObj: FilterQuery<IPurchase> = {
      status: PurchaseEnum.FAVOURITE,
    };

    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortPurchaseEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Purchase.find(filterObj)
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Purchase.countDocuments(filterObj),
    ]);

    return { entities, total };
  }

  public async getMyPurchase(userId: string): Promise<IPurchase[]> {
    return await Purchase.findOne({
      _userId: userId,
      status: PurchaseEnum.IN_PROGRESS,
    });
  }

  public async getMyFavorite(userId: string): Promise<IPurchase[]> {
    return await Purchase.findOne({
      _userId: userId,
      status: PurchaseEnum.FAVOURITE,
    });
  }

  public async create(
    dto: commonPurchaseType,
    userId: string,
    bookId: string,
  ): Promise<IPurchase> {
    return await Purchase.create({ ...dto, _userId: userId, _bookId: bookId });
  }

  public async delete(purchaseId: string): Promise<string> {
    await Purchase.findByIdAndDelete(purchaseId);
    return "purchase deleted";
  }

  public async update(
    dto: commonPurchaseType,
    purchaseId: string,
  ): Promise<IPurchase> {
    return await Purchase.findByIdAndUpdate(purchaseId, dto, {
      returnDocument: "after",
    });
  }
}
export const purchaseRepository = new PurchaseRepository();
