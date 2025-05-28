import { SortUserEnum } from "../enums/sort.enum";
import { IQuery } from "./query.interface";

export interface IUser {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  role: string;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserQuery extends IQuery {
  sort: SortUserEnum;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
