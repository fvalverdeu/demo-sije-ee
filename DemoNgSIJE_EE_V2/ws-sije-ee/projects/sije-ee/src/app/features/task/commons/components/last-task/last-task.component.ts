import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-last-task',
  templateUrl: './last-task.component.html',
  styleUrls: ['./last-task.component.scss']
})
export class LastTaskComponent implements OnInit {
  @Input() task: Task;

  constructor() {
    // this.task = new Task();
  }

  ngOnInit() {
  }

}
