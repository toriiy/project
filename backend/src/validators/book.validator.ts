import Joi from "joi";

import { CategoryEnum } from "../enums/category.enum";
import { GenreEnum } from "../enums/genre.enum";
import { PublisherEnum } from "../enums/publisher.enum";

export class bookValidator {
  private static bookName = Joi.string().trim();
  private static author = Joi.string().trim();
  private static price = Joi.number();
  private static description = Joi.string();
  private static language = Joi.string();
  private static originalLanguage = Joi.string();
  private static pages = Joi.number();
  private static publisher = Joi.string().valid(
    ...Object.values(PublisherEnum),
  );
  private static genre = Joi.string().valid(...Object.values(GenreEnum));
  private static category = Joi.string().valid(...Object.values(CategoryEnum));

  public static common = Joi.object({
    name: this.bookName.required(),
    author: this.author.required(),
    price: this.price.required(),
    description: this.description.required(),
    language: this.language.required(),
    originalLanguage: this.originalLanguage.required(),
    pages: this.pages.required(),
    publisher: this.publisher.required(),
    genre: this.genre.required(),
    category: this.category.required(),
  });
}
