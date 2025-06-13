import Joi from "joi";

import { regexConstant } from "../constants/regex.constant";

export class userValidator {
  private static username = Joi.string().min(3).max(30).trim();
  private static firstName = Joi.string().min(3).max(40).trim();
  private static lastName = Joi.string().min(2).max(40).trim();
  private static age = Joi.number().min(12).max(120);
  private static email = Joi.string()
    .pattern(new RegExp(regexConstant.email))
    .trim();
  private static password = Joi.string()
    .pattern(new RegExp(regexConstant.password))
    .trim();
  private static oldPassword = Joi.string()
    .pattern(new RegExp(regexConstant.password))
    .trim();
  private static newPassword = Joi.string()
    .pattern(new RegExp(regexConstant.password))
    .trim();

  public static create = Joi.object({
    username: this.username.required(),
    firstName: this.firstName.required(),
    lastName: this.lastName.required(),
    age: this.age.required(),
    email: this.email.required(),
    password: this.password.required(),
  });

  public static update = Joi.object({
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    age: this.age,
  });

  public static signIn = Joi.object({
    email: this.email.required(),
    password: this.password.required(),
  });

  public static changePassword = Joi.object({
    oldPassword: this.oldPassword.required(),
    newPassword: this.newPassword.required(),
  });

  public static forgotPassword = Joi.object({
    email: this.email.required(),
  });

  public static setForgotPassword = Joi.object({
    newPassword: this.newPassword.required(),
  });
}
