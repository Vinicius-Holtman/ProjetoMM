// import { getCustomRepository, Repository } from "typeorm";
// import { UserRepositories } from "../repositories/UserRepositories";
// import { User } from "../entities/User"

// interface ITodoUpdate {
//     id: string,
//     isActived: boolean,
// }

// export class UpdateTodoService {
//     private userRepository: Repository<User>

//     constructor() {
//         this.userRepository = getCustomRepository(UserRepositories);
//     }

//      async update({ user_id,  }: ITodoUpdate) {
//         await this.userRepository.createQueryBuilder()
//         .update(User)
//         .set({ isActived })
//         .where("id = :id", {
//             user_id,
//         })  
//         .execute();
//     }
// }