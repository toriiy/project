import * as jwt from "jsonwebtoken";

import { config } from "../configs/config";

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
}

export const tokenService = new TokenService();
