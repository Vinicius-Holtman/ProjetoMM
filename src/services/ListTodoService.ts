import { getCustomRepository } from "typeorm"
import { TodoRepositories } from "../repositories/TodoRepositories";

export class ListTodoService {

    async execute() {
        const todoRepositories = getCustomRepository(TodoRepositories);

        const todo = await todoRepositories.find()

        return todo;
    }
}