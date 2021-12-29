import { Request, Response } from "express"
import { LoginUserService } from "../services/LoginUserService"


export class LoginUserController {
    async handle(req: Request, res: Response) {
        const email = req.body.email
        const password = req.body.password

        const loginUserController = new LoginUserService()

        const login = await loginUserController.execute({ email, password })

        if (login) {
            return res.redirect('index')
        }
    }
}