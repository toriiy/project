import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api-error";
import { IBook, IBookQuery } from "../interfaces/book.interface";
import { bookService } from "../services/book.service";

class BookController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IBookQuery;
      const result = await bookService.getList(query);
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
      const { bookId } = req.params;
      const result = await bookService.getById(bookId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { bookId } = req.params;
      await bookService.deleteBook(bookId);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }

  public async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { bookId } = req.params;
      const body = req.body as Partial<IBook>;
      const result = await bookService.updateBook(bookId, body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async uploadPhoto(req: Request, res: Response, next: NextFunction) {
    try {
      const { bookId } = req.params;
      if (!req.file) {
        throw new ApiError("Photo file is required", 400);
      }
      const result = await bookService.uploadPhoto(bookId, req.file);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deletePhoto(req: Request, res: Response, next: NextFunction) {
    try {
      const { bookId } = req.params;
      const result = await bookService.deletePhoto(bookId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}

export const bookController = new BookController();
