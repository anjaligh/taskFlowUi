import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';
import { CommonModalComponent } from 'src/app/shared/common-modal/common-modal.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    NgSelectModule,
    FormsModule,
    PaginationComponent,
    CommonModalComponent,
    DialogModule
  ],
  providers:[
    DatePipe
  ]
})
export class TasksModule { }
