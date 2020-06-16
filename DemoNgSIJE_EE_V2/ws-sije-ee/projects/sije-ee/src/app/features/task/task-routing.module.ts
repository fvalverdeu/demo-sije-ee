import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { HomeView } from './views/home/home.views';


const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: 'home',
        component: HomeView
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
