import axios from "axios";
import {IUser} from "../models/IUser";
import {IBook} from "../models/IBook";
import {IComment} from "../models/IComment";
import {ISignIn} from "../models/ISignIn";
import {ISignUp} from "../models/ISignUp";
import {ISearch} from "../models/ISearch";
import {retrieveLocalStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPair";


const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
    headers: {"Content-Type": "application/json"}
});

const axiosInstanceAuthUser = axios.create({
    baseURL: 'http://localhost/api/users',
    headers: {"Content-Type": "application/json"}
});


axiosInstanceAuthUser.interceptors.request.use(request => {
    const token = retrieveLocalStorage<ITokenPair>('user').accessToken;
    request.headers.Authorization = 'Bearer' + token;
    return request;
})

const axiosInstanceAuthPurchase = axios.create({
    baseURL: 'http://localhost/api/purchase',
    headers: {"Content-Type": "application/json"}
});

axiosInstanceAuthPurchase.interceptors.request.use(request => {
    const token = retrieveLocalStorage<ITokenPair>('user').accessToken;
    request.headers.Authorization = 'Bearer' + token;
    return request;
})


export const apiService = {
    userService: {
        getUsers: async (): Promise<IUser[]> => {
            const {data} = await axiosInstance.get<IUser[]>('/users');
            return data
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
    }
}
