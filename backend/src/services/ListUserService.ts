import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories";

export class ListUserService {

    async execute() {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.find({
            order: {
                created_at: "DESC",
            }
        })

        return user;
    }
}