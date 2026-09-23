import { OrderEnum } from "../enums/order.enum";
import { SortCategoryEnum } from "../enums/sort.enum";
import { ICategory, ICategoryQuery } from "../interfaces/category.interface";
import { Category } from "../models/category.model";

class CategoryRepository {
  public async getList(
    query: ICategoryQuery,
  ): Promise<{ entities: ICategory[]; total: number }> {
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortCategoryEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Category.find()
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Category.countDocuments(),
    ]);

    return { entities, total };
  }

  public async create(body: Partial<ICategory>): Promise<ICategory> {
    return await Category.create(body);
  }

  public async getById(categoryId: string): Promise<ICategory> {
    return await Category.findById(categoryId);
  }

  public async delete(categoryId: string): Promise<void> {
    await Category.findByIdAndDelete(categoryId);
  }

  public async update(
    categoryId: string,
    body: Partial<ICategory>,
  ): Promise<ICategory> {
    return await Category.findByIdAndUpdate(categoryId, body, {
      returnDocument: "after",
    });
  }
}

export const categoryRepository = new CategoryRepository();
