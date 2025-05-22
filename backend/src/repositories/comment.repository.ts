import { IComment, ICommentQuery } from "../interfaces/comment.interface";
import { Comment } from "../models/commentModel";

class CommentRepository {
  public async getList(
    query: ICommentQuery,
  ): Promise<{ entities: IComment[]; total: number }> {
    // const filterObj: FilterQuery<> = { isDeleted: false };
    // if (query.search) {
    //   filterObj.username = {
    //     $regex: query.search,
    //     $options: "i",
    //   };
    // }

    const skip = query.limit * (query.page - 1);
    const order = query.order;
    const sort = query.sort;

    const [entities, total] = await Promise.all([
      Comment.find()
        .limit(query.limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Comment.countDocuments(),
    ]);

    return { entities, total };
  }

  public async create(body: Partial<IComment>): Promise<IComment> {
    return await Comment.create(body);
  }

  public async delete(commentId: string): Promise<void> {
    await Comment.findByIdAndDelete(commentId);
  }
}

export const commentRepository = new CommentRepository();
