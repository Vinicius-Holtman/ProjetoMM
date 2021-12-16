import { getCustomRepository } from "typeorm"
import { CategoryRepositories } from "../repositories/CategoryRepositories";

export class ListCategoryService {

    async execute() {
        const categoryRepositories = getCustomRepository(CategoryRepositories);

        const categories = await categoryRepositories.find()

        return categories;
    }
}