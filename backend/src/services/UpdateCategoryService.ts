import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { Category } from "../entities/Category"

interface ICategoryUpdate {
    id: string,
    category: string
}

export class UpdateCategoryService {

    async update({ id, category }: ICategoryUpdate) {
        const categoryRepository = getCustomRepository(CategoryRepositories);

        await categoryRepository.createQueryBuilder()
        .update(Category)
        .set({ category })
        .where("id = :id", {
            id
        })
        .execute();

        const categories =  await categoryRepository.findOne({
            where: {
                id: id
            }
        });

        return categories;
    }
}