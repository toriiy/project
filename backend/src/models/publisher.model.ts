import { model, Schema } from "mongoose";

import { IPublisher } from "../interfaces/publisher.interface";

const PublisherSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false },
);

export const Publisher = model<IPublisher>("publishers", PublisherSchema);
