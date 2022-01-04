import { Request, Response } from "express"
import { CreateCategoryService } from "../services/CreateCategoryService"

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { category } = req.body;

        const createTodoService = new CreateCategoryService();

        const todo = await createTodoService.execute({ 
            category
        })
        
        return res.json(todo);
    }
}