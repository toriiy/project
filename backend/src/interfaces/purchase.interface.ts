import { purchaseEnum } from "../enums/purchase.enum";
import { sortPurchaseEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IPurchase {
  _id: string;
  _userId: string;
  _bookId: string;
  name: string;
  price: number;
  photo: string;
  status: purchaseEnum;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPurchaseQuery extends IQuery {
  sort: sortPurchaseEnum;
}

export type createPurchaseType = Pick<
  IPurchase,
  "_userId" | "_bookId" | "name" | "price" | "photo" | "status"
>;

export type updatePurchaseType = Pick<
  IPurchase,
  "name" | "price" | "photo" | "status"
>;
