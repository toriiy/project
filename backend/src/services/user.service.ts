import {userRepository} from "../repositories/user.repository";
import {IUser} from "../interfaces/user.interface";

export class UserService {
    public async getList(): Promise<IUser[]> {
        return await userRepository.getList()
    }

    public async createUser(body: Partial<IUser>): Promise<IUser> {
        return await userRepository.create(body)
    }
}

export const userService = new UserService()