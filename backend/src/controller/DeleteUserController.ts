import { Request, Response } from "express"
import { DeleteUserService } from "../services/DeleteUserService"

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.params;

        const deleteUserService = new DeleteUserService();

        const user = await deleteUserService.delete({ user_id })

        return res.json(user);
    }
}