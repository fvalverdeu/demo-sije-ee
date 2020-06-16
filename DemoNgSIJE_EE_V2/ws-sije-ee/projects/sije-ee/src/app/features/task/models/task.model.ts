import { ITaskResponse } from '../interfaces/task-response.interface';

export class Task {
  name: string;
  description: string;
  dueDate: string;

  constructor(data?: ITaskResponse) {
    this.name = data.name || '';
    this.description = data.description || '';
    this.dueDate = data.dueDate || '';
  }
}
