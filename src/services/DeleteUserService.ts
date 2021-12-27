import { getCustomRepository, Repository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { User } from "../entities/User"

interface IUserDelete {
    user_id: string
}

export class DeleteUserService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UserRepositories);
    }

     async delete({ user_id }: IUserDelete) {
        await this.userRepository.createQueryBuilder()
        .delete()
        .from(User)
        .where("user_id = :user_id", { user_id })
        .execute();
    }
}