import { OrderEnum } from "../enums/order.enum";
import { SortUserEnum } from "../enums/sort.enum";
import { IUser, IUserQuery } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getList(
    query: IUserQuery,
  ): Promise<{ entities: IUser[]; total: number }> {
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortUserEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      User.find()
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      User.countDocuments(),
    ]);

    return { entities, total };
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async getByEmail(email: string): Promise<IUser> {
    return await User.findOne({ email });
  }

  public async create(body: Partial<IUser>): Promise<IUser> {
    return await User.create(body);
  }

  public async delete(userId: string): Promise<void> {
    await User.findByIdAndDelete(userId);
  }

  public async update(body: Partial<IUser>, userId: string): Promise<IUser> {
    return await User.findByIdAndUpdate(userId, body, {
      returnDocument: "after",
    });
  }
}

export const userRepository = new UserRepository();
