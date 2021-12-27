import { getCustomRepository, Repository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { User } from "../entities/User"

interface IUserUpdate {
    user_id: string
}

export class UpdateTodoService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UserRepositories);
    }

     async update({ user_id }: IUserUpdate) {
        await this.userRepository.createQueryBuilder()
        .from(User)
        .where("user_id = :user_id", {
            user_id
        })
        .execute();
    }
}