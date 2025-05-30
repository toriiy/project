import { config } from "../configs/config";
import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { ApiError } from "../errors/api-error";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";
import {
  IChangePassword,
  IForgotPassword,
  ISetForgotPassword,
  ISignIn,
  ISignUp,
} from "../interfaces/user.interface";
import { actionTokenRepository } from "../repositories/action-token.repository";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { emailService } from "./email.service";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";

class AuthService {
  public async signIn(dto: ISignIn): Promise<ITokenPair> {
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

  public async signUp(dto: ISignUp): Promise<ITokenPair> {
    const password = await passwordService.hashPassword(dto.password);
    const user = await userRepository.create({ ...dto, password });
    const tokens = tokenService.generateTokens({
      userId: user._id,
      role: user.role,
    });
    await tokenRepository.create({ ...tokens, _userId: user._id });

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

  public async forgotPassword(dto: IForgotPassword): Promise<void> {
    const user = await userRepository.getByEmail(dto.email);
    if (!user) return;

    const token = tokenService.generateActionToken(
      { userId: user._id, role: user.role },
      ActionTokenTypeEnum.FORGOT_PASSWORD,
    );

    await actionTokenRepository.create({
      token,
      _userId: user._id,
      type: ActionTokenTypeEnum.FORGOT_PASSWORD,
    });

    await emailService.sendEmail(
      EmailTypeEnum.FORGOT_PASSWORD,
      config.smtpEmail,
      {
        firstName: user.firstName,
        frontUrl: config.frontUrl,
        actionToken: token,
      },
    );
  }

  public async setForgotPassword(
    dto: ISetForgotPassword,
    payload: ITokenPayload,
    token: string,
  ): Promise<void> {
    const password = await passwordService.hashPassword(dto.newPassword);
    await userRepository.update({ password }, payload.userId);

    await actionTokenRepository.deleteByParams({ token });
  }

  public async signOut(payload: ITokenPayload, token: string): Promise<void> {
    const user = await userRepository.getById(payload.userId);
    if (user) {
      await tokenRepository.deleteByParams({ accessToken: token });
      await emailService.sendEmail(EmailTypeEnum.SIGN_OUT, config.smtpEmail, {
        firstName: user.firstName,
      });
    }
  }

  public async signOutAll(payload: ITokenPayload): Promise<void> {
    const user = await userRepository.getById(payload.userId);
    if (user) {
      await tokenRepository.deleteAllByParams({ _userId: user._id });
      await emailService.sendEmail(EmailTypeEnum.SIGN_OUT, config.smtpEmail, {
        firstName: user.firstName,
      });
    }
  }
}

export const authService = new AuthService();
