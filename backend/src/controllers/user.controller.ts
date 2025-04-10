import {NextFunction, Request, Response} from "express";
import {userService} from "../services/user.service";
import {IUser} from "../interfaces/user.interface";

export class UserController {
    public async getList(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await userService.getList();
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body as Partial<IUser>;
            const user = await userService.createUser(body);
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

export const userController = new UserController()