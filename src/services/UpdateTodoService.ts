import { getCustomRepository, Repository } from "typeorm";
import { TodoRepositories } from "../repositories/TodoRepositories";
import { Todo } from "../entities/Todo"
import console from "console";

interface ITodoUpdate {
    id: string,
    isActived: boolean,
}

export class UpdateTodoService {

    async update({ id, isActived }: ITodoUpdate) {
        const todoRepository = getCustomRepository(TodoRepositories);

        await todoRepository.createQueryBuilder()
        .update(Todo)
        .set({ isActived })
        .where("id = :id", {
            id
        })
        .execute();

        const todo =  await todoRepository.findOne({
            where: {
                id: id
            }
        });

        return todo;
    }
}