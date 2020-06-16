import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskCommonsModule } from './commons/commons.module';
import { HomeView } from './views/home/home.views';
import { DetailComponent } from './views/detail/detail.component';


@NgModule({
  declarations: [TaskComponent, HomeView, DetailComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    TaskCommonsModule
  ]
})
export class TaskModule { }
