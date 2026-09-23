import { ICategory, ICategoryQuery } from "../interfaces/category.interface";
import { categoryRepository } from "../repositories/category.repository";

class CategoryService {
  public async getList(
    query: ICategoryQuery,
  ): Promise<{ entities: ICategory[]; total: number }> {
    return await categoryRepository.getList(query);
  }

  public async createCategory(body: Partial<ICategory>): Promise<ICategory> {
    return await categoryRepository.create(body);
  }

  public async getById(categoryId: string): Promise<ICategory> {
    return await categoryRepository.getById(categoryId);
  }

  public async deleteCategory(categoryId: string): Promise<void> {
    await categoryRepository.delete(categoryId);
  }

  public async updateCategory(
    categoryId: string,
    body: Partial<ICategory>,
  ): Promise<ICategory> {
    return await categoryRepository.update(categoryId, body);
  }
}

export const categoryService = new CategoryService();
