import axios from "axios";
import {IUser} from "../models/IUser";
import {IBook} from "../models/IBook";
import {IComment} from "../models/IComment";
import {ISignIn} from "../models/ISignIn";
import {ISignUp} from "../models/ISignUp";


const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
    headers: {"Content-Type": "application/json"}
});

export const apiService = {
    userService: {
        getUsers: async (): Promise<IUser[]> => {
            const {data} = await axiosInstance.get<IUser[]>('/users');
            return data
        }
    },

    authService: {
        signUp: async (dto: ISignUp) => {
            const {data} = await axiosInstance.post('/auth/sign-up', dto);
            return data
        },
        signIn: async (dto: ISignIn) => {
            const {data} = await axiosInstance.post('/auth/sign-in', dto);
            return data
        }
    },

    bookService: {
        getBooks: async (): Promise<IBook[]> => {
            const {data} = await axiosInstance.get<IBook[]>('/books');
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
