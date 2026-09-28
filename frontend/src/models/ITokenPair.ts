import {IUser} from "./IUser";

export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
}

export interface IAuthResponse extends ITokenPair {
    user: IUser;
}