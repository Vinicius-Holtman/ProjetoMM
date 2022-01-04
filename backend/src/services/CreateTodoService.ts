import { getCustomRepository } from "typeorm";
import { TodoRepositories } from "../repositories/TodoRepositories";


interface ITodoRequest {
   title: string,
   description: string,
   isActived: boolean,
   data_limit: Date,
}

export class CreateTodoService {
    async execute({ title, description, isActived = false, data_limit } : ITodoRequest) {
        const TodoRepository = getCustomRepository(TodoRepositories)

        const titleAlreadyExists = await TodoRepository.findOne({
            title
        })

        if(titleAlreadyExists) {
            throw new Error("Title Already Exists");
        }

        const todo = await TodoRepository.create({
            title,
            description,
            isActived,
            data_limit
        })

        await TodoRepository.save(todo)

        return todo
    }
}