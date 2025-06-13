import { PurchaseEnum } from "../enums/purchase.enum";
import { SortPurchaseEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IPurchase {
  _id: string;
  _userId: string;
  _bookId: string;
  name: string;
  price: number;
  photo: string;
  status: PurchaseEnum;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPurchaseQuery extends IQuery {
  sort: SortPurchaseEnum;
}

export type commonPurchaseType = Pick<
  IPurchase,
  "name" | "price" | "photo" | "status"
>;
