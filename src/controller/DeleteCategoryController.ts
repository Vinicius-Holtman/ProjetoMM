import { Request, Response} from 'express'
import { DeleteCategoryService } from '../services/DeleteCategoryService'

export class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteCategoryController = new DeleteCategoryService()

        const category = await deleteCategoryController.delete({ id })

        return res.json(category)
    }
}