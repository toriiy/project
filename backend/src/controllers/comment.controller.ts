import { NextFunction, Request, Response } from "express";

import { IComment } from "../interfaces/comment.interface";
import { commentService } from "../services/comment.service";

class CommentController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await commentService.getList();
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as Partial<IComment>;
      const comment = await commentService.createComment(body);
      res.json(comment);
    } catch (e) {
      next(e);
    }
  }

  public async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const commentId = req.params;
      await commentService.deleteComment(commentId);
      res.json("comment deleted").status(204);
    } catch (e) {
      next(e);
    }
  }
}

export const commentController = new CommentController();
