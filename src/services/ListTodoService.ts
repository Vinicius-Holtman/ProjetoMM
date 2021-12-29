import { getCustomRepository } from "typeorm"
import { TodoRepositories } from "../repositories/TodoRepositories";

export class ListTodoService {
    private isWithoutTodo: boolean = false
    async execute() {
        const todoRepositories = getCustomRepository(TodoRepositories);
        
        const todo = await todoRepositories.find({
            order: {
                created_at: "DESC",
            }
        })
        
        if (todo.length == 0) {
            return this.isWithoutTodo = true
        } else {
            return todo;
        }

    }
}