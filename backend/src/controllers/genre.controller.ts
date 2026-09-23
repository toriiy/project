import { NextFunction, Request, Response } from "express";

import { IGenre, IGenreQuery } from "../interfaces/genre.interface";
import { genreService } from "../services/genre.service";

class GenreController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IGenreQuery;
      const result = await genreService.getList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { genreId } = req.params;
      const result = await genreService.getById(genreId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createGenre(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as Partial<IGenre>;
      const genre = await genreService.createGenre(body);
      res.json(genre);
    } catch (e) {
      next(e);
    }
  }

  public async updateGenre(req: Request, res: Response, next: NextFunction) {
    try {
      const { genreId } = req.params;
      const body = req.body as Partial<IGenre>;
      const result = await genreService.updateGenre(genreId, body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deleteGenre(req: Request, res: Response, next: NextFunction) {
    try {
      const { genreId } = req.params;
      await genreService.deleteGenre(genreId);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export const genreController = new GenreController();
