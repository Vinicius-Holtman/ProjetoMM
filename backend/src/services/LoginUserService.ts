import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UserRepositories } from "../repositories/UserRepositories";

interface ILoginUser {
    email: string,
    password: string
}

export class LoginUserService {
    private userRepository: Repository<User>
    
    constructor() {
        this.userRepository = getCustomRepository(UserRepositories);
    }
    async execute({ email, password }: ILoginUser) {
        // const userRepositories = getCustomRepository(UserRepositories);

        const userExists = await this.userRepository.findOne({
            where: [
                { email: email, password: password }
            ]
        })

        if (userExists) {
            return userExists;
        } else {
            return new Error("User incorrect");  
        }
    }
}

