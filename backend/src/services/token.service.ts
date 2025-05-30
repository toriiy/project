import * as jwt from "jsonwebtoken";

import { config } from "../configs/config";
import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { ApiError } from "../errors/api-error";
import { ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public generateTokens(payload: ITokenPayload) {
    const accessToken = jwt.sign(payload, config.jwtAccessSecret, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, config.jwtRefreshSecret, {
      expiresIn: "60m",
    });
    return { accessToken, refreshToken };
  }

  public generateActionToken(
    payload: ITokenPayload,
    type: ActionTokenTypeEnum,
  ) {
    let secret: string;
    switch (type) {
      case ActionTokenTypeEnum.FORGOT_PASSWORD:
        secret = config.actionForgotPasswordSecret;
        break;
      default:
        throw new ApiError("Invalid action token type", 400);
    }
    return jwt.sign(payload, secret, { expiresIn: "30m" });
  }

  public async verifyToken(
    token: string,
    type: TokenTypeEnum | ActionTokenTypeEnum,
  ): Promise<ITokenPayload> {
    try {
      let secret: string;

      switch (type) {
        case TokenTypeEnum.ACCESS:
          secret = config.jwtAccessSecret;
          break;
        case TokenTypeEnum.REFRESH:
          secret = config.jwtRefreshSecret;
          break;
        case ActionTokenTypeEnum.FORGOT_PASSWORD:
          secret = config.actionForgotPasswordSecret;
          break;
        default:
          throw new ApiError("Invalid token type", 401);
      }
      return jwt.verify(token, secret) as ITokenPayload;
    } catch (e) {
      throw new ApiError(e.message, 401);
    }
  }
}

export const tokenService = new TokenService();
