import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class TasksModule { }
