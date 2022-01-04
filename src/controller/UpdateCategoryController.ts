import { Request, Response } from "express"
import { UpdateCategoryService } from "../services/UpdateCategoryService"

export class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { category } = req.body;

        const updateCategoryService = new UpdateCategoryService();

        const updateCategory = await updateCategoryService.update({ id, category });

        return res.json(updateCategory);
    }
}