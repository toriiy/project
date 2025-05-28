import { config } from "../configs/config";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { ApiError } from "../errors/api-error";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";
import { IChangePassword } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { emailService } from "./email.service";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";

class AuthService {
  public async signIn(dto: any): Promise<ITokenPair> {
    const user = await userRepository.getByEmail(dto.email);
    const isPasswordCorrect = await passwordService.comparePassword(
      dto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new ApiError("Incorrect email or password", 401);
    }
    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });
    await tokenRepository.create({ ...tokens, _userId: user._id });
    return tokens;
  }

  public async signUp(dto: any): Promise<ITokenPair> {
    const password = await passwordService.hashPassword(dto.password);
    const user = await userRepository.create({ ...dto, password });
    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });
    await tokenRepository.create({ tokens, _userId: user._id });

    await emailService.sendEmail(EmailTypeEnum.WELCOME, config.smtpEmail, {
      firstName: user.firstName,
      frontUrl: config.frontUrl,
    });

    return tokens;
  }

  public async refresh(
    refreshToken: string,
    payload: ITokenPayload,
  ): Promise<ITokenPair> {
    await tokenRepository.deleteByParams({ refreshToken });

    const tokens = tokenService.generateTokens({
      userId: payload.userId,
      role: payload.role,
    });

    await tokenRepository.create({ ...tokens, _userId: payload.userId });
    return tokens;
  }

  public async changePassword(
    dto: IChangePassword,
    payload: ITokenPayload,
  ): Promise<void> {
    const user = await userRepository.getById(payload.userId);
    const isPasswordCorrect = await passwordService.comparePassword(
      dto.oldPassword,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new ApiError("Password is incorrect", 400);
    }

    const password = await passwordService.hashPassword(dto.newPassword);
    await userRepository.update({ password }, payload.userId);
  }
}

export const authService = new AuthService();
