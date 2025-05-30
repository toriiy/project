import { NextFunction, Request, Response } from "express";

import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { ApiError } from "../errors/api-error";
import { actionTokenRepository } from "../repositories/action-token.repository";
import { tokenRepository } from "../repositories/token.repository";
import { tokenService } from "../services/token.service";

class AuthMiddleware {
  public async checkAccessToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const header = req.headers.authorization;
      if (!header) {
        throw new ApiError("No token provided", 401);
      }

      const accessToken = header.split("Bearer ")[1];
      if (!accessToken) {
        throw new ApiError("No token provided", 401);
      }

      const tokenPayload = await tokenService.verifyToken(
        accessToken,
        TokenTypeEnum.ACCESS,
      );

      const tokenPair = await tokenRepository.findByParams({ accessToken });
      if (!tokenPair) {
        throw new ApiError("Invalid token", 401);
      }

      req.res.locals.tokenPayload = tokenPayload;
      req.res.locals.accessToken = accessToken;
      next();
    } catch (e) {
      next(e);
    }
  }

  public async checkRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const header = req.headers.authorization;
      if (!header) {
        throw new ApiError("No token provided", 401);
      }

      const refreshToken = header.split("Bearer ")[1];
      if (!refreshToken) {
        throw new ApiError("No token provided", 401);
      }

      const tokenPayload = await tokenService.verifyToken(
        refreshToken,
        TokenTypeEnum.REFRESH,
      );

      const tokenPair = await tokenRepository.findByParams({ refreshToken });
      if (!tokenPair) {
        throw new ApiError("Invalid token", 401);
      }

      req.res.locals.tokenPayload = tokenPayload;
      req.res.locals.refreshToken = refreshToken;
      next();
    } catch (e) {
      next(e);
    }
  }

  public checkActionToken(type: ActionTokenTypeEnum) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const header = req.headers.authorization;
        if (!header) {
          throw new ApiError("No token provided", 401);
        }

        const actionToken = header.split("Bearer ")[1];
        if (!actionToken) {
          throw new ApiError("No token provided", 401);
        }

        const tokenPayload = await tokenService.verifyToken(actionToken, type);

        const entity = await actionTokenRepository.findByParams({
          token: actionToken,
        });
        if (!entity) {
          throw new ApiError("Invalid token", 401);
        }

        req.res.locals.tokenPayload = tokenPayload;
        req.res.locals.actionToken = actionToken;
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const authMiddleware = new AuthMiddleware();
