import { getCustomRepository } from "typeorm";
import { TodoRepositories } from "../repositories/TodoRepositories";


interface ITodoRequest {
   title: string,
   description: string,
   data_limit: Date,
}

export class CreateTodoService {
    async execute({ title, description, data_limit } : ITodoRequest) {
        const TodoRepository = getCustomRepository(TodoRepositories)

        const todo = TodoRepository.create({
            title,
            description,
            data_limit
        })

        await TodoRepository.save(todo)

        return todo
    }
}