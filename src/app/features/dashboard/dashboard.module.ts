import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SummaryCardComponent } from 'src/app/shared/summary-card/summary-card.component';
import { CircularChartComponent } from 'src/app/shared/charts/circular-chart/circular-chart.component';
import { LineChartComponent } from 'src/app/shared/charts/line-chart/line-chart.component';
import { BarChartComponent } from 'src/app/shared/charts/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CircularChartComponent,
    SummaryCardComponent,
    LineChartComponent,
    BarChartComponent
  ]
})
export class DashboardModule { }
