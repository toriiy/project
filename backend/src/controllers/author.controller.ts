import { NextFunction, Request, Response } from "express";

import { IAuthor, IAuthorQuery } from "../interfaces/author.interface";
import { authorService } from "../services/author.service";

class AuthorController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IAuthorQuery;
      const result = await authorService.getList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorId } = req.params;
      const result = await authorService.getById(authorId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as Partial<IAuthor>;
      const author = await authorService.createAuthor(body);
      res.json(author);
    } catch (e) {
      next(e);
    }
  }

  public async updateAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorId } = req.params;
      const body = req.body as Partial<IAuthor>;
      const result = await authorService.updateAuthor(authorId, body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deleteAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorId } = req.params;
      await authorService.deleteAuthor(authorId);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export const authorController = new AuthorController();
