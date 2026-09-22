import { OrderEnum } from "../enums/order.enum";
import { SortAuthorEnum } from "../enums/sort.enum";
import { IAuthor, IAuthorQuery } from "../interfaces/author.interface";
import { Author } from "../models/author.model";

class AuthorRepository {
  public async getList(
    query: IAuthorQuery,
  ): Promise<{ entities: IAuthor[]; total: number }> {
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortAuthorEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Author.find()
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Author.countDocuments(),
    ]);

    return { entities, total };
  }

  public async create(body: Partial<IAuthor>): Promise<IAuthor> {
    return await Author.create(body);
  }

  public async getById(authorId: string): Promise<IAuthor> {
    return await Author.findById(authorId);
  }

  public async delete(authorId: string): Promise<void> {
    await Author.findByIdAndDelete(authorId);
  }

  public async update(
    authorId: string,
    body: Partial<IAuthor>,
  ): Promise<IAuthor> {
    return await Author.findByIdAndUpdate(authorId, body, {
      returnDocument: "after",
    });
  }
}

export const authorRepository = new AuthorRepository();
