import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsComponent } from 'src/app/shared/charts/charts.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { SummaryCardComponent } from 'src/app/shared/summary-card/summary-card.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsComponent,
    HeaderComponent,
    SummaryCardComponent
  ]
})
export class DashboardModule { }
