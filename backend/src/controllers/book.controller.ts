import { NextFunction, Request, Response } from "express";

import { IBook } from "../interfaces/book.interface";
import { bookService } from "../services/book.service";

class BookController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      // const query = req.query as unknown as IBookQuery;
      const result = await bookService.getList();
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as Partial<IBook>;
      const book = await bookService.createBook(body);
      res.json(book);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = req.params as unknown as string;
      const result = await bookService.getById(bookId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = req.params as unknown as string;
      await bookService.deleteBook(bookId);
      res.json("book deleted").status(204);
    } catch (e) {
      next(e);
    }
  }

  public async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = req.params as unknown as string;
      const body = req.body as Partial<IBook>;
      const result = await bookService.updateBook(bookId, body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}

export const bookController = new BookController();
