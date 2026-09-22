import { IAuthor, IAuthorQuery } from "../interfaces/author.interface";
import { authorRepository } from "../repositories/author.repository";

class AuthorService {
  public async getList(
    query: IAuthorQuery,
  ): Promise<{ entities: IAuthor[]; total: number }> {
    return await authorRepository.getList(query);
  }

  public async createAuthor(body: Partial<IAuthor>): Promise<IAuthor> {
    return await authorRepository.create(body);
  }

  public async getById(authorId: string): Promise<IAuthor> {
    return await authorRepository.getById(authorId);
  }

  public async deleteAuthor(authorId: string): Promise<void> {
    await authorRepository.delete(authorId);
  }

  public async updateAuthor(
    authorId: string,
    body: Partial<IAuthor>,
  ): Promise<IAuthor> {
    return await authorRepository.update(authorId, body);
  }
}

export const authorService = new AuthorService();
