import { Request, Response } from "express"
import { ListUserService } from "../services/ListUserService"

export class ListUserController {
    async handle(req: Request, res: Response) {
        const listUserService = new ListUserService();

        const user = await listUserService.execute();

        return res.json(user);
    }
}