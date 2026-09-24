import Joi from "joi";

import { regexConstant } from "../constants/regex.constant";

export class bookValidator {
  private static bookName = Joi.string().trim();
  private static author = Joi.string()
    .pattern(new RegExp(regexConstant.objectId))
    .trim();
  private static price = Joi.number();
  private static description = Joi.string();
  private static language = Joi.string();
  private static pages = Joi.number();
  private static publisher = Joi.string()
    .pattern(new RegExp(regexConstant.objectId))
    .trim();
  private static genre = Joi.string()
    .pattern(new RegExp(regexConstant.objectId))
    .trim();
  private static category = Joi.string()
    .pattern(new RegExp(regexConstant.objectId))
    .trim();

  public static common = Joi.object({
    name: this.bookName.required(),
    author: this.author,
    price: this.price.required(),
    description: this.description.required(),
    language: this.language.required(),
    pages: this.pages.required(),
    publisher: this.publisher,
    genre: this.genre,
    category: this.category,
  });
}
