import { SortCommentEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IComment {
  _id: string;
  _bookId: string;
  firstName: string;
  lastName?: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICommentQuery extends IQuery {
  sort: SortCommentEnum;
}
