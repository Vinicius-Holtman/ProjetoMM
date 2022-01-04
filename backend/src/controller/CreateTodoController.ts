import { Request, Response } from "express"
import { CreateTodoService } from "../services/CreateTodoService"

export class CreateTodoController {
    async handle(req: Request, res: Response) {
        const { title, description, isActived, data_limit } = req.body;

        const createTodoService = new CreateTodoService();

        const todo = await createTodoService.execute({ 
            title,
            description,
            isActived,
            data_limit
        })

        return res.json(todo);
    }
}