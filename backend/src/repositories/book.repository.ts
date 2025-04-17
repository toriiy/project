import {IBook} from "../interfaces/book.interface";
import {Book} from "../models/bookModel";

export class BookRepository {
    public async getList(): Promise<IBook[]> {
        return await Book.find()
    }

    public async create(body: Partial<IBook>): Promise<IBook> {
        return await Book.create(body)
    }

    public async getById(bookId: string): Promise<IBook> {
        return await Book.findById(bookId)
    }

    public async delete(bookId: string): Promise<void> {
        await Book.findByIdAndDelete(bookId)
    }

    public async update(bookId: string, body: Partial<IBook>): Promise<IBook> {
        return await Book.findByIdAndUpdate(bookId, body, {
            returnDocument: "after",
        });
    }
}

export const bookRepository = new BookRepository()