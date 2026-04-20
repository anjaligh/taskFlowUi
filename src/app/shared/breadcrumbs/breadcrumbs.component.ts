import { Component, Input } from '@angular/core';
import { breadcrumbsItem } from 'src/app/core/model/navigation-model';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbsComponent {
  @Input() breadcrumbItems !: breadcrumbsItem[] 
}
