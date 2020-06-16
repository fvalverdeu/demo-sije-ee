import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  @Input() tasks: Task[] = [];
  constructor() { }

  ngOnInit() {
  }

}
