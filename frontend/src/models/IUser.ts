export interface IUser {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    role: string;
    isDeleted: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}