import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskResponse } from '../../interfaces/task-response.interface';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule
})
export class TaskHttp {

  constructor(private httpService: HttpClient) { }

  public getAllTasks() {
    return this.httpService.get<ITaskResponse[]>('https://localhost:44378/api/Tasks');
  }

  public getLastTask() {
    return this.httpService.get<ITaskResponse>('https://localhost:44378/api/Tasks/1');
  }
}
