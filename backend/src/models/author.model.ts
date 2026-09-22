import { model, Schema } from "mongoose";

import { IAuthor } from "../interfaces/author.interface";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false },
);

export const Author = model<IAuthor>("authors", AuthorSchema);
