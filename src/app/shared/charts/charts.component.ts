import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { SAMPLE_TICKETS, TICKET_STATUSES } from 'src/app/data/ticketData';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
};
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  standalone:true,
  imports:[
    NgApexchartsModule
  ],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  @Input() chartSeries!: number[];
  @Input() chartLabels!: string[];
  @Input() chartColors!: string[];

  constructor() {}
  ngOnInit() {
    this.chartOptions = {
      series: this.chartSeries,
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: this.chartLabels,
      colors: ['#AEC7ED','#94E9B8', '#92BFFF', '#6BE6D3', '#B899EB'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
