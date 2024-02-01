import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}

// user.repository.ts
// export const UserRepository = dataSource.getRepository(User).extend({
//     findByName(firstName: string, lastName: string) {
//         return this.createQueryBuilder("user")
//             .where("user.firstName = :firstName", { firstName })
//             .andWhere("user.lastName = :lastName", { lastName })
//             .getMany()
//     },
// })

// // user.controller.ts
// export class UserController {
//     users() {
//         return UserRepository.findByName("Timber", "Saw")
//     }
// }
