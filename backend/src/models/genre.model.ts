import { model, Schema } from "mongoose";

import { IGenre } from "../interfaces/genre.interface";

const GenreSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false },
);

export const Genre = model<IGenre>("genres", GenreSchema);
