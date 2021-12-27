import { getCustomRepository, Repository } from "typeorm";
import { TodoRepositories } from "../repositories/TodoRepositories";
import { Todo } from "../entities/Todo"

interface ITodoDelete {
    id: string
}

export class DeleteTodoService {
    private todoRepository: Repository<Todo>

    constructor() {
        this.todoRepository = getCustomRepository(TodoRepositories);
    }

     async delete({ id }: ITodoDelete) {
        await this.todoRepository.createQueryBuilder()
        .delete()
        .from(Todo)
        .where("id = :id", { id })
        .execute();
    }
}