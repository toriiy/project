import { IComment } from "../interfaces/comment.interface";
import { Comment } from "../models/commentModel";

export class CommentRepository {
  public async getList(): Promise<IComment[]> {
    return await Comment.find();
  }

  public async create(body: Partial<IComment>): Promise<IComment> {
    return await Comment.create(body);
  }

  public async delete(commentId: string): Promise<void> {
    await Comment.findByIdAndDelete(commentId);
  }
}

export const commentRepository = new CommentRepository();
