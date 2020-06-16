import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';
import { LastTaskComponent } from './last-task/last-task.component';

const COMPONENTS = [ TaskTableComponent, LastTaskComponent ];

@NgModule({
  declarations: [...COMPONENTS ],
  exports: [...COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
