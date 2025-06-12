import { IBook } from "../interfaces/book.interface";
import { Book } from "../models/book.model";

class BookRepository {
  public async getList(): Promise<IBook[]> {
    // : Promise<{ entities: IBook[]; total: number }>
    // const filterObj: FilterQuery<> = { isDeleted: false };
    // if (query.search) {
    //   filterObj.username = {
    //     $regex: query.search,
    //     $options: "i",
    //   };
    // }

    // const skip = query.limit * (query.page - 1);
    // const order = query.order;
    // const sort = query.sort;
    //
    // const [entities, total] = await Promise.all([
    //   Book.find()
    //     .limit(query.limit)
    //     .skip(skip)
    //     .sort({ [sort]: order }),
    //   Book.countDocuments(),
    // ]);
    //
    // return { entities, total };

    return await Book.find();
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
