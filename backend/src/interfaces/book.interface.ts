import { SortBookEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IBook {
  _id: string;
  name: string;
  author: string;
  price: number;
  description: string;
  language: string;
  originalLanguage: string;
  originalName: string;
  pages: number;
  publisher: string;
  genre: string;
  category: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBookQuery extends IQuery {
  sort: SortBookEnum;
}
