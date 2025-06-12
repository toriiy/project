import { NextFunction, Request, Response } from "express";

import { ITokenPayload } from "../interfaces/token.interface";
import { IUser } from "../interfaces/user.interface";
import { userService } from "../services/user.service";

class UserController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      // const query = req.query as unknown as IUserQuery;
      const result = await userService.getList();
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const user = await userService.getUser(tokenPayload.userId);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await userService.deleteUser(tokenPayload.userId);
      res.json("user deleted").status(204);
    } catch (e) {
      next(e);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const body = req.body as Partial<IUser>;
      const result = await userService.updateUser(body, tokenPayload.userId);
      res.json(result).status(201);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
