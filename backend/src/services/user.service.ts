import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }

  public async getUser(userId: string): Promise<IUser> {
    return await userRepository.getById(userId);
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
