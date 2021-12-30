import { getCustomRepository, getRepository, Repository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { User } from "../entities/User"

interface IUserUpdate {
    user_id: string,
    name: string,
    email: string,
    password: string
}

export class UpdateUserService {

    async update({ user_id, name, email, password }: IUserUpdate) {
        const userRepository = getCustomRepository(UserRepositories);

        await userRepository.createQueryBuilder()
        .update(User)
        .set({ name, email, password })
        .where("user_id = :user_id", {
            user_id
        })
        .execute();

        return await userRepository.findOne({
            where: {
                user_id: user_id
            }
        });
    }
}