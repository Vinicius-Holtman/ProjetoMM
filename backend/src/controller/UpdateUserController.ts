import { Request, Response } from "express"
import { UpdateUserService } from "../services/UpdateUserService"

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.params;
        const { name, email, password } = req.body;

        const updateUserService = new UpdateUserService();

        const updateUser = await updateUserService.update({ user_id, name, email, password });

        return res.json(updateUser);
    }
}