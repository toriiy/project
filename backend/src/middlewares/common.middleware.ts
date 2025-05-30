import { NextFunction, Request, Response } from "express";
// import { ObjectSchema } from "joi";
import { isObjectIdOrHexString } from "mongoose";

import { ApiError } from "../errors/api-error";
import { userRepository } from "../repositories/user.repository";

class CommonMiddleware {
  public isIdValid(key: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params[key];
        if (!isObjectIdOrHexString(id)) {
          throw new ApiError("Invalid id", 400);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }

  // public isBodyValid(validator: ObjectSchema) {
  //   return async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       req.body = await validator.validateAsync(req.body);
  //       next();
  //     } catch (e) {
  //       next(new ApiError(e.details[0].message, 400));
  //     }
  //   };
  // }

  public async isEmailUnique(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email as string;
      const user = await userRepository.getByEmail(email);
      if (user) {
        throw new ApiError("Email is already in use", 409);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const commonMiddleware = new CommonMiddleware();
