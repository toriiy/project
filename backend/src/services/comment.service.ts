import {IComment} from "../interfaces/comment.interface";
import {commentRepository} from "../repositories/comment.repository";

export class CommentService {
    public async getList(): Promise<IComment[]> {
        return await commentRepository.getList()
    }

    public async createComment(body: Partial<IComment>): Promise<IComment> {
        return await commentRepository.create(body)
    }

    public async deleteComment(): Promise<void> {
        await commentRepository.delete()
    }

}

export const commentService = new CommentService()