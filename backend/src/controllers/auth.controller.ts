import { NextFunction, Request, Response } from "express";

import { ITokenPayload } from "../interfaces/token.interface";
import {
  IChangePassword,
  IForgotPassword,
  ISetForgotPassword,
  ISignIn,
  ISignUp,
} from "../interfaces/user.interface";
import { authService } from "../services/auth.service";

class AuthController {
  public async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as ISignIn;
      const result = await authService.signIn(dto);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as ISignUp;
      const result = await authService.signUp(dto);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.res.locals.refreshToken as string;
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await authService.refresh(refreshToken, tokenPayload);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IChangePassword;
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await authService.changePassword(dto, tokenPayload);
      res.status(204);
    } catch (e) {
      next(e);
    }
  }

  public async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IForgotPassword;
      await authService.forgotPassword(dto);
      res.status(204);
    } catch (e) {
      next(e);
    }
  }

  public async setForgotPassword(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const dto = req.body as ISetForgotPassword;
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const actionToken = req.res.locals.actionToken as string;
      await authService.setForgotPassword(dto, tokenPayload, actionToken);
      res.status(204);
    } catch (e) {
      next(e);
    }
  }

  public async signOut(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const accessToken = req.res.locals.accessToken as string;
      await authService.signOut(tokenPayload, accessToken);
      res.status(204);
    } catch (e) {
      next(e);
    }
  }

  public async signOutAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await authService.signOutAll(tokenPayload);
      res.status(204);
    } catch (e) {
      next(e);
    }
  }
}

export const authController = new AuthController();
