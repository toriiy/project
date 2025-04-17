export interface IBook {
    _id: string;
    name: string;
    author: string;
    price: number;
    description: string;
    language: string;
    originalLanguage: string;
    originalName: string;
    pages: number;
    publisher: string;
    genre: string;
    category: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
}