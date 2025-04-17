import {Comment} from "../models/commentModel";
import {IComment} from "../interfaces/comment.interface";

export class CommentRepository {
    public async getList(): Promise<IComment[]> {
        return await Comment.find();
    }

    public async create(body: Partial<IComment>): Promise<IComment> {
        return await Comment.create(body);
    }

    public async delete(): Promise<void> {
        // await Comment.deleteOne()
    }
}

export const commentRepository = new CommentRepository()