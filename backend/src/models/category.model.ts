import { model, Schema } from "mongoose";

import { ICategory } from "../interfaces/category.interface";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false },
);

export const Category = model<ICategory>("categories", CategorySchema);
