import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { CustomNodeComponent } from './custom-node/custom-node.component';
import { CustomConnectionComponent } from './custom-connection/custom-connection.component';
import { CustomSocketComponent } from './custom-socket/custom-socket.component';
import { BreadcrumbsComponent } from "src/app/shared/breadcrumbs/breadcrumbs.component";


@NgModule({
  declarations: [
    WorkflowComponent,
    CustomNodeComponent,
    CustomConnectionComponent,
    CustomSocketComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    BreadcrumbsComponent
]
})
export class WorkflowModule { }
