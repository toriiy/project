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
import {IAuthor} from "../models/IAuthor";
import {IPublisher} from "../models/IPublisher";
import {IGenre} from "../models/IGenre";
import {ICategory} from "../models/ICategory";


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

const axiosInstanceRefresh = axios.create({
    baseURL: 'http://localhost/api/auth/refresh',
    headers: {"Content-Type": "application/json"}
});

axiosInstanceRefresh.interceptors.request.use(request => {
    const token = retrieveLocalStorage<ITokenPair>('user').refreshToken;
    request.headers.Authorization = 'Bearer ' + token;
    return request
})


export const apiService = {
    userService: {
        getUsers: async (): Promise<IUser[]> => {
            const {data} = await axiosInstanceAuthUser.get<{ entities: IUser[]; total: number }>('');
            return data.entities
        },
        getUser: async (): Promise<IUser> => {
            const {data} = await axiosInstanceAuthUser.get<IUser>('/me');
            return data
        },
        updateUser: async (dto: IUpdateUser): Promise<void> => {
            const {data} = await axiosInstanceAuthUser.patch<IUser>('/me', dto);
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

            const {data} = await axiosInstanceRefresh.post<ITokenPair>('/refresh');

            userTokens.accessToken = data.accessToken;
            userTokens.refreshToken = data.refreshToken;

            localStorage.setItem('userTokens', JSON.stringify(userTokens));
        },
        forgotPassword: async (dto: IForgotPassword): Promise<void> => {
            await axiosInstanceAuth.post<void>('/password/forgot', dto)
        },
        setForgotPassword: async (dto: ISetForgotPassword): Promise<void> => {
            await axiosInstanceAuth.patch<void>('/password/forgot', dto)
        },
        changePassword: async (dto: IChangePassword): Promise<void> => {
            await axiosInstanceAuth.patch<void>('/password/change', dto)
        }
    },

    bookService: {
        getBooks: async (): Promise<IBook[]> => {
            const {data} = await axiosInstance.get<{ entities: IBook[]; total: number }>('/books');
            return data.entities
        },
        searchBooks: async ({search}: ISearch): Promise<IBook[]> => {
            const {data} = await axiosInstance.get<{ entities: IBook[]; total: number }>(`/books?search=${search}`);
            return data.entities
        },
        uploadPhoto: async (bookId: string, photo: File): Promise<IBook> => {
            const formData = new FormData();
            formData.append('photo', photo);
            const {data} = await axiosInstance.post<IBook>(`/books/${bookId}/photo`, formData);
            return data
        },
        deletePhoto: async (bookId: string): Promise<IBook> => {
            const {data} = await axiosInstance.delete<IBook>(`/books/${bookId}/photo`);
            return data
        }
    },

    commentService: {
        getComments: async (): Promise<IComment[]> => {
            const {data} = await axiosInstance.get<{ entities: IComment[]; total: number }>('/comments');
            return data.entities
        }
    },

    authorService: {
        getAuthors: async (): Promise<IAuthor[]> => {
            const {data} = await axiosInstance.get<{ entities: IAuthor[]; total: number }>('/authors');
            return data.entities
        }
    },

    publisherService: {
        getPublishers: async (): Promise<IPublisher[]> => {
            const {data} = await axiosInstance.get<{ entities: IPublisher[]; total: number }>('/publishers');
            return data.entities
        }
    },

    genreService: {
        getGenres: async (): Promise<IGenre[]> => {
            const {data} = await axiosInstance.get<{ entities: IGenre[]; total: number }>('/genres');
            return data.entities
        }
    },

    categoryService: {
        getCategories: async (): Promise<ICategory[]> => {
            const {data} = await axiosInstance.get<{ entities: ICategory[]; total: number }>('/categories');
            return data.entities
        }
    },

    purchaseService: {
        getCart: async (): Promise<IPurchase[]> => {
            const {data} = await axiosInstanceAuthPurchase.get<IPurchase[]>('/buy-list/my');
            return data
        },
        createCart: async (bookId: string, dto: any) => {
            await axiosInstanceAuthPurchase.post(`/${bookId}`, dto)
        },
        getFavorites: async (): Promise<IPurchase[]> => {
            const {data} = await axiosInstanceAuthPurchase.get<IPurchase[]>('/favorites/my');
            return data
        },
        createFavorite: async (bookId: string, dto: any) => {
            await axiosInstanceAuthPurchase.post(`/${bookId}`, dto)
        },
        updatePurchase: async (purchaseId: string, dto: any) => {
            await axiosInstanceAuthPurchase.patch(`/${purchaseId}`, dto)
        },
        deletePurchase: async (purchaseId: string) => {
            await axiosInstanceAuthPurchase.delete(`/${purchaseId}`)
        }
    }
}
