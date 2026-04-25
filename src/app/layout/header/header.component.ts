import { Component, EventEmitter, Input, Output } from '@angular/core';
import { breadcrumbsItem } from '../../core/model/navigation-model';
import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  @Input() breadcrumbItems !: breadcrumbsItem[] 
  @Output() toggleMenuVisibility = new EventEmitter() 
  sidebarOpen = true;
  toggleSideBar=()=>{
    this.sidebarOpen= !this.sidebarOpen
    this.toggleMenuVisibility.emit(this.sidebarOpen)
  }
}
