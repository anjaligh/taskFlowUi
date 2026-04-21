import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { CustomNodeComponent } from './custom-node/custom-node.component';
import { CustomConnectionComponent } from './custom-connection/custom-connection.component';
import { CustomSocketComponent } from './custom-socket/custom-socket.component';
import { HeaderComponent } from 'src/app/core/header/header.component';


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
    HeaderComponent
]
})
export class WorkflowModule { }
