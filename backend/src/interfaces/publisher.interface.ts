import { SortPublisherEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IPublisher {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPublisherQuery extends IQuery {
  sort: SortPublisherEnum;
}
