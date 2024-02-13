import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  //! Not working here
  //   async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //     const { title, description } = createTaskDto;
  //     const task = new Task();
  //     task.title = title;
  //     task.description = description;
  //     task.status = TaskStatus.OPEN;
  //     await task.save();
  //     return task;
  //   }
}

//----------------------------------------------------------------------

// export const TaskRepository = datasource.getRepository(Task);
