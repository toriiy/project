import { IGenre, IGenreQuery } from "../interfaces/genre.interface";
import { genreRepository } from "../repositories/genre.repository";

class GenreService {
  public async getList(
    query: IGenreQuery,
  ): Promise<{ entities: IGenre[]; total: number }> {
    return await genreRepository.getList(query);
  }

  public async createGenre(body: Partial<IGenre>): Promise<IGenre> {
    return await genreRepository.create(body);
  }

  public async getById(genreId: string): Promise<IGenre> {
    return await genreRepository.getById(genreId);
  }

  public async deleteGenre(genreId: string): Promise<void> {
    await genreRepository.delete(genreId);
  }

  public async updateGenre(
    genreId: string,
    body: Partial<IGenre>,
  ): Promise<IGenre> {
    return await genreRepository.update(genreId, body);
  }
}

export const genreService = new GenreService();
