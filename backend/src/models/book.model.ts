import { model, Schema } from "mongoose";

import { CategoryEnum } from "../enums/category.enum";
import { GenreEnum } from "../enums/genre.enum";
import { PublisherEnum } from "../enums/publisher.enum";
import { IBook } from "../interfaces/book.interface";

const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    language: { type: String, required: true },
    originalLanguage: { type: String, required: true },
    originalName: { type: String, required: true },
    pages: { type: Number, required: true },
    publisher: { type: String, enum: PublisherEnum, required: true },
    genre: { type: String, enum: GenreEnum, required: true },
    category: { type: String, enum: CategoryEnum, required: true },
    photo: { type: String, required: false },
  },
  { timestamps: true, versionKey: false },
);

export const Book = model<IBook>("books", BookSchema);
