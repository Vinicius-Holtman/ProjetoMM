import { Repository, EntityRepository } from "typeorm";
import { Todo } from "../entities/Todo";

@EntityRepository(Todo)
export class TodoRepositories extends Repository<Todo> {}