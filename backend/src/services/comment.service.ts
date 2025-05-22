import { IComment, ICommentQuery } from "../interfaces/comment.interface";
import { commentRepository } from "../repositories/comment.repository";

class CommentService {
  public async getList(
    query: ICommentQuery,
  ): Promise<{ entities: IComment[]; total: number }> {
    return await commentRepository.getList(query);
  }

  public async createComment(body: Partial<IComment>): Promise<IComment> {
    return await commentRepository.create(body);
  }

  public async deleteComment(commentId: string): Promise<void> {
    await commentRepository.delete(commentId);
  }
}

export const commentService = new CommentService();
