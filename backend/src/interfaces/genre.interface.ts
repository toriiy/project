import { SortGenreEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IGenre {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGenreQuery extends IQuery {
  sort: SortGenreEnum;
}
