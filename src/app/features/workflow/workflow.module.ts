import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { CustomNodeComponent } from './custom-node/custom-node.component';
import { CustomConnectionComponent } from './custom-connection/custom-connection.component';
import { CustomSocketComponent } from './custom-socket/custom-socket.component';


@NgModule({
  declarations: [
    WorkflowComponent,
    CustomNodeComponent,
    CustomConnectionComponent,
    CustomSocketComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
