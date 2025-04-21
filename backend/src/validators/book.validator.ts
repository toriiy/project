// import joi from "joi";
//
// import { CategoryEnum } from "../enums/category.enum";
// import { GenreEnum } from "../enums/genre.enum";
// import { PublisherEnum } from "../enums/publisher.enum";
//
// export class bookValidator {
//   private static bookName = joi.string().trim();
//   private static author = joi.string().trim();
//   private static price = joi.number();
//   private static description = joi.string();
//   private static language = joi.string();
//   private static originalLanguage = joi.string();
//   private static pages = joi.number();
//   private static publisher = joi
//     .string()
//     .valid(...Object.values(PublisherEnum));
//   private static genre = joi.string().valid(...Object.values(GenreEnum));
//   private static category = joi.string().valid(...Object.values(CategoryEnum));
//
//   public static common = joi.object({
//     name: this.bookName.required(),
//     author: this.author.required(),
//     price: this.price.required(),
//     description: this.description.required(),
//     language: this.language.required(),
//     originalLanguage: this.originalLanguage.required(),
//     pages: this.pages.required(),
//     publisher: this.publisher.required(),
//     genre: this.genre.required(),
//     category: this.category.required(),
//   });
// }
