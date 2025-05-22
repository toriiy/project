import {
  createPurchaseType,
  IPurchase,
  IPurchaseQuery,
  updatePurchaseType,
} from "../interfaces/purchase.interface";
import { purchaseRepository } from "../repositories/purchase.repository";

class PurchaseService {
  public async getPurchase(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    return await purchaseRepository.getPurchase(query);
  }

  public async getFavorite(
    query: IPurchaseQuery,
  ): Promise<{ entities: IPurchase[]; total: number }> {
    return await purchaseRepository.getFavorite(query);
  }

  public async createPurchase(dto: createPurchaseType): Promise<IPurchase> {
    return await purchaseRepository.create(dto);
  }

  public async updatePurchase(
    dto: updatePurchaseType,
    purchaseId: string,
  ): Promise<IPurchase> {
    return await purchaseRepository.update(dto, purchaseId);
  }

  public async deletePurchase(purchaseId: string): Promise<string> {
    return await purchaseRepository.delete(purchaseId);
  }
}

export const purchaseService = new PurchaseService();
