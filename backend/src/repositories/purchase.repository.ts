import { FilterQuery } from "mongoose";

import { PurchaseEnum } from "../enums/purchase.enum";
import {
  createPurchaseType,
  IPurchase,
  IPurchaseQuery,
  updatePurchaseType,
} from "../interfaces/purchase.interface";
import { Purchase } from "../models/purchase.model";

class PurchaseRepository {
  public async getPurchase(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    const filterObj: FilterQuery<IPurchase> = {
      status: PurchaseEnum.IN_PROGRESS,
    };
    // if(query.search){
    //     filterObj.username = {
    //         $regex: query.search,
    //         $options: "i"
    //     }
    // }

    const skip = query.limit * (query.page - 1);
    const order = query.order;
    const sort = query.sort;

    const [entities, total] = await Promise.all([
      Purchase.find(filterObj)
        .limit(query.limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Purchase.countDocuments(filterObj),
    ]);

    return { entities, total };
  }

  public async getFavorite(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    const filterObj: FilterQuery<IPurchase> = {
      status: PurchaseEnum.FAVOURITE,
    };
    // if(query.search){
    //     filterObj.username = {
    //         $regex: query.search,
    //         $options: "i"
    //     }
    // }

    const skip = query.limit * (query.page - 1);
    const order = query.order;
    const sort = query.sort;

    const [entities, total] = await Promise.all([
      Purchase.find(filterObj)
        .limit(query.limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Purchase.countDocuments(filterObj),
    ]);

    return { entities, total };
  }

  public async create(dto: createPurchaseType): Promise<IPurchase> {
    return await Purchase.create(dto);
  }

  public async delete(purchaseId: string): Promise<string> {
    await Purchase.findByIdAndDelete(purchaseId);
    return "purchase deleted";
  }

  public async update(
    dto: updatePurchaseType,
    purchaseId: string,
  ): Promise<IPurchase> {
    return await Purchase.findByIdAndUpdate(purchaseId, dto, {
      returnDocument: "after",
    });
  }
}
export const purchaseRepository = new PurchaseRepository();
