import { ApiError } from "../errors/api-error";
import { IBook, IBookQuery } from "../interfaces/book.interface";
import { bookRepository } from "../repositories/book.repository";
import { storageService } from "./storage.service";

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

  public async uploadPhoto(
    bookId: string,
    file: Express.Multer.File,
  ): Promise<IBook> {
    const book = await bookRepository.getById(bookId);
    if (!book) {
      throw new ApiError("Book not found", 404);
    }

    if (book.photo) {
      await storageService.deleteFile(book.photo);
    }

    const path = `books/${bookId}/${Date.now()}-${file.originalname}`;
    const photoUrl = await storageService.uploadFile(
      path,
      file.buffer,
      file.mimetype,
    );

    return await bookRepository.updatePhoto(bookId, photoUrl);
  }

  public async deletePhoto(bookId: string): Promise<IBook> {
    const book = await bookRepository.getById(bookId);
    if (!book) {
      throw new ApiError("Book not found", 404);
    }
    if (!book.photo) {
      throw new ApiError("Book has no photo", 400);
    }

    await storageService.deleteFile(book.photo);

    return await bookRepository.removePhoto(bookId);
  }
}

export const bookService = new BookService();
