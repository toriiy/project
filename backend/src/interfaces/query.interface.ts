import { orderEnum } from "../enums/order.enum";

export interface IQuery {
  page: number;
  limit: number;
  search?: string;
  order: orderEnum;
}
