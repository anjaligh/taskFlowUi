import { Component, Input } from '@angular/core';
import { breadcrumbsItem } from '../model/navigation-model';
import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [BreadcrumbsComponent]
})
export class HeaderComponent {
  @Input() breadcrumbItems !: breadcrumbsItem[] 
}
