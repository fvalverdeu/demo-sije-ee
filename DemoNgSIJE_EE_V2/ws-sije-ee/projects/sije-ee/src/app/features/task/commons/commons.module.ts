import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [],
  exports: [ComponentsModule],
  imports: [
    CommonModule,
    HttpModule,
    UiModule
  ]
})
export class TaskCommonsModule { }
