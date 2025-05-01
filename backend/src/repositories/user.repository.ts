import { IUser } from "../interfaces/user.interface";
import { User } from "../models/userModel";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await User.find();
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
