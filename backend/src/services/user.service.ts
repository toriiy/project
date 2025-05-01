import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }

  public async createUser(body: Partial<IUser>): Promise<IUser> {
    const password = await passwordService.hashPassword(body.password);
    return await userRepository.create({ ...body, password });
  }

  public async deleteUser(userId: any): Promise<void> {
    await userRepository.delete(userId);
  }

  public async updateUser(body: Partial<IUser>, userId: any): Promise<IUser> {
    return await userRepository.update(body, userId);
  }
}

export const userService = new UserService();
