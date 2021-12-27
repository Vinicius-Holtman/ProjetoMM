import { Request, Response} from 'express'
import { DeleteTodoService } from '../services/DeleteTodoService'

export class DeleteTodoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteTodoController = new DeleteTodoService()

        const todo = await deleteTodoController.delete({ id })

        return res.json(todo)
    }
}