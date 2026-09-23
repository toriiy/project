import { model, Schema } from "mongoose";

import { CategoryEnum } from "../enums/category.enum";
import { GenreEnum } from "../enums/genre.enum";
import { IBook } from "../interfaces/book.interface";
import { Author } from "./author.model";
import { Publisher } from "./publisher.model";

const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: Author },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    language: { type: String, required: true },
    originalLanguage: { type: String, required: true },
    originalName: { type: String, required: true },
    pages: { type: Number, required: true },
    publisher: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: Publisher,
    },
    genre: { type: String, enum: GenreEnum, required: true },
    category: { type: String, enum: CategoryEnum, required: true },
    photo: { type: String, required: false },
  },
  { timestamps: true, versionKey: false },
);

export const Book = model<IBook>("books", BookSchema);
