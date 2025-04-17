import {userRepository} from "../repositories/user.repository";
import {IUser} from "../interfaces/user.interface";

export class UserService {
    public async getList(): Promise<IUser[]> {
        return await userRepository.getList()
    }

    public async createUser(body: Partial<IUser>): Promise<IUser> {
        return await userRepository.create(body)
    }

    public async deleteUser(userId: any): Promise<void> {
        await userRepository.delete(userId)
    }

    public async updateUser(body: Partial<IUser>, userId: any): Promise<IUser> {
        return await userRepository.update(body, userId)
    }

}

export const userService = new UserService()