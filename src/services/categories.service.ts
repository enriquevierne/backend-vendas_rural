import { Category } from "../entities";
import {
  CategoryCreate,
  CategoryRead,
  CategoryRetrieveResult,
} from "../interfaces";
import { categoriesRepository } from "../repositories";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoriesRepository.create(payload);
  await categoriesRepository.save(category);

  return category;
};

const read = async (): Promise<CategoryRead> => {
  return await categoriesRepository.find();
};

const retrieve = async (
  categoryId: number
): Promise<any> => {
  const realEstate = await categoriesRepository.findOne(
    {
      relations: {
        realEstate: true,
      },
      where: { id: categoryId },
    }
  );

  return realEstate;
};

export default { create, read, retrieve };
