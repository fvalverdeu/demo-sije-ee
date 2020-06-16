import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskHttp } from '../../commons/http/task.Http';

@Injectable()
export class HomePresenter {
  task: Task;
  tasks: Task[];

  constructor(private taskHttp: TaskHttp) {
    // this.task = new Task();
    // this.tasks = [];
  }

  getAllTask() {
    this.taskHttp.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  getLastTask() {
    this.taskHttp.getLastTask().subscribe(data => {
      this.task = data;
    });
  }
}
