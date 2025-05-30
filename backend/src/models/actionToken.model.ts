import { model, Schema } from "mongoose";

import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { IActionToken } from "../interfaces/actionToken.interface";
import { User } from "./user.model";

const ActionTokenSchema = new Schema(
  {
    token: { type: String, required: true },
    _userId: { type: Schema.Types.ObjectId, required: true, ref: User },
    type: { type: String, required: true, enum: ActionTokenTypeEnum },
  },
  { timestamps: true, versionKey: false },
);

export const ActionToken = model<IActionToken>(
  "action-tokens",
  ActionTokenSchema,
);
