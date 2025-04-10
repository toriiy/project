import {User} from "../models/userModel";
import {IUser} from "../interfaces/user.interface";

export class UserRepository {
    public async getList(): Promise<IUser[]> {
        return await User.find();
    }

    public async create(body: Partial<IUser>): Promise<IUser> {
        return await User.create(body)
    }

}

export const userRepository = new UserRepository()