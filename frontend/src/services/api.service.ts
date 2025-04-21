import axios from "axios";
import {IUser} from "../models/IUser";
import {IBook} from "../models/IBook";
import {IComment} from "../models/IComment";


const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {"Content-Type": "application/json"}
});

export const apiService = {
    userService: {
        getUsers: async (): Promise<IUser[]> => {
            const {data} = await axiosInstance.get<IUser[]>('/users');
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