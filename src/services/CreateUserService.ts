import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcrypt"

interface IUserRequest {
    name: string,
    email: string,
    password: string
}

export class CreateUserService {
    async execute({ name, email, password } : IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories)

        if (!email) {
            throw new Error("Email incorrect");
        }

        const emailAlreadyExists = await userRepositories.findOne({
            email
        })

        if(emailAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = await userRepositories.create({ 
            name,
            email,
            password: passwordHash
        })

        await userRepositories.save(user)

        return user
    }
}