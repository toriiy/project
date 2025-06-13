import { OrderEnum } from "../enums/order.enum";
import { SortBookEnum } from "../enums/sort.enum";
import { IBook, IBookQuery } from "../interfaces/book.interface";
import { Book } from "../models/book.model";

class BookRepository {
  public async getList(
    query: IBookQuery,
  ): Promise<{ entities: IBook[]; total: number }> {
    // const filterObj: FilterQuery<IBook>;
    // if (query.search) {
    //   filterObj.name = {
    //     $regex: query.search,
    //     $options: "i",
    //   };
    // }

    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortBookEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Book.find()
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Book.countDocuments(),
    ]);

    return { entities, total };
  }

  public async create(body: Partial<IBook>): Promise<IBook> {
    return await Book.create(body);
  }

  public async getById(bookId: string): Promise<IBook> {
    return await Book.findById(bookId);
  }

  public async delete(bookId: string): Promise<void> {
    await Book.findByIdAndDelete(bookId);
  }

  public async update(bookId: string, body: Partial<IBook>): Promise<IBook> {
    return await Book.findByIdAndUpdate(bookId, body, {
      returnDocument: "after",
    });
  }
}

export const bookRepository = new BookRepository();
