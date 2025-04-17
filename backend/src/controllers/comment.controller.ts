import {Request, Response, NextFunction} from 'express'
import {commentService} from "../services/comment.service";
import {IComment} from "../interfaces/comment.interface";

export class CommentController {
    public async getList(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await commentService.getList();
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    public async createComment(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body as Partial<IComment>;
            const comment = await commentService.createComment(body);
            res.json(comment)
        } catch (e) {
            next(e)
        }
    }

    public async deleteComment(req: Request, res: Response, next: NextFunction) {
        try {
            await commentService.deleteComment()
            res.json('comment deleted')
        } catch (e) {
            next(e)
        }
    }

}

export const commentController = new CommentController()