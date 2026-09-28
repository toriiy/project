import { IPublicUser, IUser, IUserQuery } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";
import { userTransformer } from "../transformers/user.transformer";

class UserService {
  public async getList(
    query: IUserQuery,
  ): Promise<{ entities: IPublicUser[]; total: number }> {
    const { entities, total } = await userRepository.getList(query);
    return { entities: entities.map(userTransformer.toPublic), total };
  }

  public async getUser(userId: string): Promise<IPublicUser> {
    const user = await userRepository.getById(userId);
    return userTransformer.toPublic(user);
  }

  public async deleteUser(userId: string): Promise<void> {
    await userRepository.delete(userId);
  }

  public async updateUser(
    body: Partial<IUser>,
    userId: string,
  ): Promise<IPublicUser> {
    const user = await userRepository.update(body, userId);
    return userTransformer.toPublic(user);
  }
}

export const userService = new UserService();
