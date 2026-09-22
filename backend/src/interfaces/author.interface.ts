import { SortAuthorEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IAuthor {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthorQuery extends IQuery {
  sort: SortAuthorEnum;
}
