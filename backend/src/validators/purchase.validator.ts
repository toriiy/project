import Joi from "joi";

import { PurchaseEnum } from "../enums/purchase.enum";

export class purchaseValidator {
  private static bookName = Joi.string().trim();
  private static price = Joi.number();
  private static status = Joi.string().valid(...Object.values(PurchaseEnum));

  public static common = Joi.object({
    name: this.bookName.required(),
    price: this.price.required(),
    status: this.status.required(),
  });
}
