import {User} from "../models/userModel";
import {IUser} from "../interfaces/user.interface";

export class UserRepository {
    public async getList(): Promise<IUser[]> {
        return await User.find();
    }

    public async create(body: Partial<IUser>): Promise<IUser> {
        return await User.create(body)
    }

    public async delete(userId: string): Promise<void> {
        await User.findByIdAndDelete(userId)
    }

    public async update(body: Partial<IUser>, userId: string): Promise<IUser> {
        return await User.findByIdAndUpdate(userId, body, {
            returnDocument: "after",
        });
    }

}

export const userRepository = new UserRepository()