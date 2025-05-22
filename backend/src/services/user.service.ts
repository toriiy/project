import { IUser, IUserQuery } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";

class UserService {
  public async getList(
    query: IUserQuery,
  ): Promise<{ entities: IUser[]; total: number }> {
    return await userRepository.getList(query);
  }

  public async createUser(body: Partial<IUser>): Promise<IUser> {
    const password = await passwordService.hashPassword(body.password);
    return await userRepository.create({ ...body, password });
  }

  public async deleteUser(userId: string): Promise<void> {
    await userRepository.delete(userId);
  }

  public async updateUser(
    body: Partial<IUser>,
    userId: string,
  ): Promise<IUser> {
    return await userRepository.update(body, userId);
  }
}

export const userService = new UserService();
