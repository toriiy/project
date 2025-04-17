import {Request, Response, NextFunction} from 'express'
import {bookService} from "../services/book.service";
import {IBook} from "../interfaces/book.interface";

export class BookController {
    public async getList(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await bookService.getList();
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    public async createBook(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body as Partial<IBook>;
            const book = await bookService.createBook(body);
            res.json(book)
        } catch (e) {
            next(e)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const bookId = req.params;
            const result = await bookService.getById(bookId);
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    public async deleteBook(req: Request, res: Response, next: NextFunction) {
        try {
            const bookId = req.params;
            await bookService.deleteBook(bookId)
            res.json('book deleted').status(204)
        } catch (e) {
            next(e)
        }
    }

    public async updateBook(req: Request, res: Response, next: NextFunction) {
        try {
            const bookId = req.params;
            const body = req.body as Partial<IBook>;
            const result = await bookService.updateBook(bookId, body);
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

export const bookController = new BookController()