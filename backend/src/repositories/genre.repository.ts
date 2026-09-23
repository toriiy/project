import { OrderEnum } from "../enums/order.enum";
import { SortGenreEnum } from "../enums/sort.enum";
import { IGenre, IGenreQuery } from "../interfaces/genre.interface";
import { Genre } from "../models/genre.model";

class GenreRepository {
  public async getList(
    query: IGenreQuery,
  ): Promise<{ entities: IGenre[]; total: number }> {
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortGenreEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Genre.find()
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Genre.countDocuments(),
    ]);

    return { entities, total };
  }

  public async create(body: Partial<IGenre>): Promise<IGenre> {
    return await Genre.create(body);
  }

  public async getById(genreId: string): Promise<IGenre> {
    return await Genre.findById(genreId);
  }

  public async delete(genreId: string): Promise<void> {
    await Genre.findByIdAndDelete(genreId);
  }

  public async update(genreId: string, body: Partial<IGenre>): Promise<IGenre> {
    return await Genre.findByIdAndUpdate(genreId, body, {
      returnDocument: "after",
    });
  }
}

export const genreRepository = new GenreRepository();
