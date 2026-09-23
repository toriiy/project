import { SortCategoryEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface ICategory {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryQuery extends IQuery {
  sort: SortCategoryEnum;
}
