import { IBook, IBookQuery } from "../interfaces/book.interface";
import { bookRepository } from "../repositories/book.repository";

class BookService {
  public async getList(
    query: IBookQuery,
  ): Promise<{ entities: IBook[]; total: number }> {
    return await bookRepository.getList(query);
  }

  public async createBook(body: Partial<IBook>): Promise<IBook> {
    return await bookRepository.create(body);
  }

  public async getById(bookId: string): Promise<IBook> {
    return await bookRepository.getById(bookId);
  }

  public async deleteBook(bookId: string): Promise<void> {
    await bookRepository.delete(bookId);
  }

  public async updateBook(
    bookId: string,
    body: Partial<IBook>,
  ): Promise<IBook> {
    return await bookRepository.update(bookId, body);
  }
}

export const bookService = new BookService();
