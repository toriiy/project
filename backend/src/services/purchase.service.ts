import {
  commonPurchaseType,
  IPurchase,
  IPurchaseQuery,
} from "../interfaces/purchase.interface";
import { purchaseRepository } from "../repositories/purchase.repository";

class PurchaseService {
  public async getPurchaseList(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    return await purchaseRepository.getPurchaseList(query);
  }

  public async getFavoriteList(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    return await purchaseRepository.getFavoriteList(query);
  }

  public async getMyPurchase(userId: string): Promise<IPurchase[]> {
    return await purchaseRepository.getMyPurchase(userId);
  }

  public async getMyFavorite(userId: string): Promise<IPurchase[]> {
    return await purchaseRepository.getMyFavorite(userId);
  }

  public async createPurchase(
    dto: commonPurchaseType,
    userId: string,
    bookId: string,
  ): Promise<IPurchase> {
    return await purchaseRepository.create(dto, userId, bookId);
  }

  public async updatePurchase(
    dto: commonPurchaseType,
    purchaseId: string,
  ): Promise<IPurchase> {
    return await purchaseRepository.update(dto, purchaseId);
  }

  public async deletePurchase(purchaseId: string): Promise<string> {
    return await purchaseRepository.delete(purchaseId);
  }
}

export const purchaseService = new PurchaseService();
