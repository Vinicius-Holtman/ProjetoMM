import { Request, Response } from "express"
import { CreateCategoryService } from "../services/CreateCategoryService"

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { category, todo_sender } = req.body;

        const createTodoService = new CreateCategoryService();

        const todo = await createTodoService.execute({ 
            category,
            todo_sender
        })
        
        return res.json(todo);
    }
}