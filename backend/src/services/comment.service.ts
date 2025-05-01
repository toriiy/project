import { IComment } from "../interfaces/comment.interface";
import { commentRepository } from "../repositories/comment.repository";

class CommentService {
  public async getList(): Promise<IComment[]> {
    return await commentRepository.getList();
  }

  public async createComment(body: Partial<IComment>): Promise<IComment> {
    return await commentRepository.create(body);
  }

  public async deleteComment(commentId: any): Promise<void> {
    await commentRepository.delete(commentId);
  }
}

export const commentService = new CommentService();
