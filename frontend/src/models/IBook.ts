import {IAuthor} from "./IAuthor";
import {IPublisher} from "./IPublisher";
import {IGenre} from "./IGenre";
import {ICategory} from "./ICategory";

export interface IBook {
    _id: string;
    name: string;
    author: IAuthor;
    price: number;
    description: string;
    language: string;
    originalLanguage: string;
    originalName: string;
    pages: number;
    publisher: IPublisher;
    genre: IGenre;
    category: ICategory;
    photo?: string;
    createdAt: Date;
    updatedAt: Date;
}