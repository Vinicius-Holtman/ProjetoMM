import { getCustomRepository, Repository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { Category } from "../entities/Category"

interface ICategoryDelete {
    id: string
}

export class DeleteCategoryService {
    private categoryRepository: Repository<Category>

    constructor() {
        this.categoryRepository = getCustomRepository(CategoryRepositories);
    }

     async delete({ id }: ICategoryDelete) {
        await this.categoryRepository.createQueryBuilder()
        .delete()
        .from(Category)
        .where("id = :id", { id })
        .execute();
    }
}