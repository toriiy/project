import { IBook } from "../interfaces/book.interface";
import { bookRepository } from "../repositories/book.repository";

class BookService {
  public async getList(): Promise<IBook[]> {
    return await bookRepository.getList();
  }

  public async createBook(body: Partial<IBook>): Promise<IBook> {
    return await bookRepository.create(body);
  }

  public async getById(bookId: any): Promise<IBook> {
    return await bookRepository.getById(bookId);
  }

  public async deleteBook(bookId: any): Promise<void> {
    await bookRepository.delete(bookId);
  }

  public async updateBook(bookId: any, body: Partial<IBook>): Promise<IBook> {
    return await bookRepository.update(bookId, body);
  }
}

export const bookService = new BookService();
