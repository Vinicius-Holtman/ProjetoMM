import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";

interface ICategoryRequest {
    category: string
}

export class CreateCategoryService {
    async execute({ category } : ICategoryRequest) {
        const categoryRepositories = getCustomRepository(CategoryRepositories)

        const categories = await categoryRepositories.create({ 
            category
        })

        await categoryRepositories.save(categories)

        return categories
    }
}