import { Request, Response } from "express"
import { UpdateTodoService } from "../services/UpdateTodoService"

export class UpdateTodoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { isActived } = req.body;

        const updateTodoService = new UpdateTodoService();

        const updateTodo = await updateTodoService.update({ id, isActived });

        return res.json(updateTodo);
    }
}