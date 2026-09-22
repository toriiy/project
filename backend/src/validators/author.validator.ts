import Joi from "joi";

export class authorValidator {
  private static name = Joi.string().min(2).max(80).trim();

  public static create = Joi.object({
    name: this.name.required(),
  });

  public static update = Joi.object({
    name: this.name,
  });
}
