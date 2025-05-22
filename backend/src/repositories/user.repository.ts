import { FilterQuery } from "mongoose";

import { IUser, IUserQuery } from "../interfaces/user.interface";
import { User } from "../models/userModel";

class UserRepository {
  public async getList(
    query: IUserQuery,
  ): Promise<{ entities: IUser[]; total: number }> {
    const filterObj: FilterQuery<IUser> = { isDeleted: false };
    if (query.search) {
      filterObj.username = {
        $regex: query.search,
        $options: "i",
      };
    }

    const skip = query.limit * (query.page - 1);
    const order = query.order;
    const sort = query.sort;

    const [entities, total] = await Promise.all([
      User.find()
        .limit(query.limit)
        .skip(skip)
        .sort({ [sort]: order }),
      User.countDocuments(),
    ]);

    return { entities, total };
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

  public async getByEmail(email: string): Promise<IUser> {
    return await User.findOne({ email });
  }
}

export const userRepository = new UserRepository();
