import * as jwt from "jsonwebtoken";

import { config } from "../configs/config";
import { ApiError } from "../errors/api-error";
import { ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, config.jwtAccessSecret, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, config.jwtRefreshSecret, {
      expiresIn: "60m",
    });
    return { accessToken, refreshToken };
  }

  public async verifyToken(token: string, type: "access" | "refresh") {
    try {
      let secret: string;

      switch (type) {
        case "access":
          secret = config.jwtAccessSecret;
          break;
        case "refresh":
          secret = config.jwtRefreshSecret;
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
