import { Request, Response } from "express"
import { LoginUserService } from "../services/LoginUserService"


export class LoginUserController {
    async handle(req: Request, res: Response) {
        const email = req.body
        const password = req.body

        const loginUserController = new LoginUserService()

        const login = await loginUserController.execute({ email, password })

        return login

        if (login) {
            return res.redirect('index')
        }
    }
}