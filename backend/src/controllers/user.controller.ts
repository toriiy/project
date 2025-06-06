import { NextFunction, Request, Response } from "express";

import { IUser, IUserQuery } from "../interfaces/user.interface";
import { userService } from "../services/user.service";

class UserController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IUserQuery;
      const result = await userService.getList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params as unknown as string;
      await userService.deleteUser(userId);
      res.json("user deleted").status(204);
    } catch (e) {
      next(e);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params as unknown as string;
      const body = req.body as Partial<IUser>;
      const result = await userService.updateUser(body, userId);
      res.json(result).status(201);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
