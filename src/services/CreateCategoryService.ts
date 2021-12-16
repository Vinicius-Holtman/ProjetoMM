import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";


interface ICategoryRequest {
   category: string,
   todo_sender: string,
}

export class CreateCategoryService {
    async execute({category, todo_sender} : ICategoryRequest) {
        const categoryRepositories = getCustomRepository(CategoryRepositories)


        const categories = categoryRepositories.create({
            category,
            todo_sender
        })

        await categoryRepositories.save(categories)

        return categories
    }
}