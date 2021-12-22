import { getCustomRepository, Repository } from "typeorm";
import { TodoRepositories } from "../repositories/TodoRepositories";
import { Todo } from "../entities/Todo"

interface ITodoUpdate {
    id: string,
    isActived: boolean,
}

export class UpdateTodoService {
    private todoRepository: Repository<Todo>

    constructor() {
        this.todoRepository = getCustomRepository(TodoRepositories);
    }

     async update({ id, isActived = false }: ITodoUpdate) {
        await this.todoRepository.createQueryBuilder()
        .update(Todo)
        .set({ isActived })
        .where("id = :id", {
            id,
        })  
        .execute();
    }
}