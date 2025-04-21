// import joi from "joi";
//
// import { regexConstant } from "../constants/regex.constant";
//
// export class userValidator {
//   private static username = joi.string().min(3).max(30).trim();
//   private static firstName = joi.string().min(3).max(40).trim();
//   private static lastName = joi.string().min(2).max(40).trim();
//   private static age = joi.number().min(12).max(120);
//   private static email = joi.string().regex(regexConstant.email).trim();
//   private static password = joi.string().regex(regexConstant.password).trim();
//
//   public static create = joi.object({
//     username: this.username.required(),
//     firstName: this.firstName.required(),
//     lastName: this.lastName.required(),
//     age: this.age.required(),
//     email: this.email.required(),
//     password: this.password.required(),
//   });
//
//   public static update = joi.object({
//     username: this.username,
//     firstName: this.firstName,
//     lastName: this.lastName,
//     age: this.age,
//   });
// }
