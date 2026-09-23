import { NextFunction, Request, Response } from "express";

import { ICategory, ICategoryQuery } from "../interfaces/category.interface";
import { categoryService } from "../services/category.service";

class CategoryController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as ICategoryQuery;
      const result = await categoryService.getList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId } = req.params;
      const result = await categoryService.getById(categoryId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as Partial<ICategory>;
      const category = await categoryService.createCategory(body);
      res.json(category);
    } catch (e) {
      next(e);
    }
  }

  public async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId } = req.params;
      const body = req.body as Partial<ICategory>;
      const result = await categoryService.updateCategory(categoryId, body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId } = req.params;
      await categoryService.deleteCategory(categoryId);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export const categoryController = new CategoryController();
