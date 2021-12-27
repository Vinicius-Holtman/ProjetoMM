import { Request, Response } from "express"
import { ListTodoService } from "../services/ListTodoService"

export class ListTodoController {
    async handle(req: Request, res: Response) {
        const listTodoService = new ListTodoService();

        const todo = await listTodoService.execute();

        return res.json(todo);
    }
}