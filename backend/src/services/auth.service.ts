import { ApiError } from "../errors/api-error";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";

class AuthService {
  public async signIn(dto: any) {
    const user = await userRepository.getByEmail(dto.email);
    const isPasswordCorrect = await passwordService.comparePassword(
      dto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new ApiError("Incorrect email or password", 401);
    }
  }

  public async signUp(dto: any) {
    const password = await passwordService.hashPassword(dto.password);
    return await userRepository.create({ ...dto, password });
  }
}

export const authService = new AuthService();
