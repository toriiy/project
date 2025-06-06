import axios from "axios";
import {IUser} from "../models/IUser";
import {IBook} from "../models/IBook";
import {IComment} from "../models/IComment";
import {ISignIn} from "../models/ISignIn";
import {ISignUp} from "../models/ISignUp";
import {ISearch} from "../models/ISearch";
import {retrieveLocalStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPair";
import {IForgotPassword} from "../models/IForgotPassword";
import {IChangePassword} from "../models/IChangePassword";
import {IPurchase} from "../models/IPurchase";
import {ISetForgotPassword} from "../models/ISetForgotPassword";
import {IUpdateUser} from "../models/IUpdateUser";


const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
    headers: {"Content-Type": "application/json"}
});

const axiosInstanceAuth = axios.create({
    baseURL: 'http://localhost/api/auth',
    headers: {"Content-Type": "application/json"}
});

axiosInstanceAuth.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'PUT' || request.method?.toUpperCase() === 'DELETE') {
        const token = retrieveLocalStorage<ITokenPair>('user').accessToken;
        request.headers.Authorization = 'Bearer ' + token;
    }
    return request
})

const axiosInstanceAuthUser = axios.create({
    baseURL: 'http://localhost/api/users',
    headers: {"Content-Type": "application/json"}
});


axiosInstanceAuthUser.interceptors.request.use(request => {
    const token = retrieveLocalStorage<ITokenPair>('user').accessToken;
    request.headers.Authorization = 'Bearer ' + token;
    return request;
})

const axiosInstanceAuthPurchase = axios.create({
    baseURL: 'http://localhost/api/purchase',
    headers: {"Content-Type": "application/json"}
});

axiosInstanceAuthPurchase.interceptors.request.use(request => {
    const token = retrieveLocalStorage<ITokenPair>('user').accessToken;
    request.headers.Authorization = 'Bearer ' + token;
    return request;
})


export const apiService = {
    userService: {
        getUsers: async (): Promise<IUser[]> => {
            const {data} = await axiosInstanceAuthUser.get<IUser[]>('');
            return data
        },
        getUser: async (): Promise<IUser> => {
            const {data} = await axiosInstanceAuthUser.get<IUser>('/me');
            return data
        },
        updateUser: async (dto: IUpdateUser): Promise<void> => {
            const {data} = await axiosInstanceAuthUser.put<IUser>('/me', dto);
            console.log(data)
        },
        deleteUser: async (): Promise<void> => {
            await axiosInstanceAuthUser.delete<void>('/me')
        }
    },

    authService: {
        signUp: async (dto: ISignUp): Promise<void> => {
            const {data: userTokens} = await axiosInstance.post<ITokenPair>('/auth/sign-up', dto);
            localStorage.setItem('userTokens', JSON.stringify(userTokens))
        },
        signIn: async (dto: ISignIn): Promise<void> => {
            const {data: userTokens} = await axiosInstance.post<ITokenPair>('/auth/sign-in', dto);
            localStorage.setItem('userTokens', JSON.stringify(userTokens))
        },
        refresh: async (): Promise<void> => {
            const userTokens = retrieveLocalStorage<ITokenPair>('user');

            const {data} = await axiosInstance.post<ITokenPair>('/refresh',
                {refreshToken: userTokens.refreshToken});

            userTokens.accessToken = data.accessToken;
            userTokens.refreshToken = data.refreshToken;

            localStorage.setItem('userTokens', JSON.stringify(userTokens));
        },
        forgotPassword: async (dto: IForgotPassword): Promise<void> => {
            await axiosInstanceAuth.post<void>('/password/forgot', dto)
        },
        setForgotPassword: async (dto: ISetForgotPassword): Promise<void> => {
            await axiosInstanceAuth.put<void>('/password/forgot', dto)
        },
        changePassword: async (dto: IChangePassword): Promise<void> => {
            await axiosInstanceAuth.put<void>('/password/change', dto)
        }
    },

    bookService: {
        getBooks: async (): Promise<IBook[]> => {
            const {data} = await axiosInstance.get<IBook[]>('/books');
            return data
        },
        searchBooks: async ({search}: ISearch): Promise<IBook[]> => {
            const {data} = await axiosInstance.get<IBook[]>(`/books?search=${search}`);
            return data
        }
    },

    commentService: {
        getComments: async (): Promise<IComment[]> => {
            const {data} = await axiosInstance.get<IComment[]>('/comments');
            return data
        }
    },

    purchaseService: {
        getCart: async (): Promise<IPurchase[]> => {
            const {data} = await axiosInstanceAuthPurchase.get<IPurchase[]>('/buy-list/my');
            return data
        },
        getFavorites: async (): Promise<IPurchase[]> => {
            const {data} = await axiosInstanceAuthPurchase.get<IPurchase[]>('/favorites/my');
            return data
        }
    }
}
