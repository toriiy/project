import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api-error";
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
        "access",
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

      const refreshToken = header.split("Bearer")[1];
      if (!refreshToken) {
        throw new ApiError("No token provided", 401);
      }

      const tokenPayload = await tokenService.verifyToken(
        refreshToken,
        "refresh",
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
}

export const authMiddleware = new AuthMiddleware();
