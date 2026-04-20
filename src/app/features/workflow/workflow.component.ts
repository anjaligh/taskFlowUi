import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { createEditor } from './editor';
import { IT_SUPPORT_WORKFLOW } from 'src/app/data/ticketData';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent {
  constructor(private injector: Injector) { }
  @ViewChild("rete") container!: ElementRef;
  workFlowData!: any[];
  breadcrumbItems = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'workflow', url: '/workflow' },
  ]
  ngAfterViewInit(): void {
    const el = this.container.nativeElement;
    this.workFlowData = IT_SUPPORT_WORKFLOW.nodes
    if (el) {
      createEditor(el, this.injector, this.workFlowData);
    }
  }
}
