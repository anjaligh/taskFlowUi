import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexResponsive,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { SAMPLE_TICKETS, TICKET_STATUSES } from 'src/app/data/ticketData';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: {
    series: ApexNonAxisChartSeries | ApexAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    colors: any;
  };
  @Input() chartSeries!: number[];
  @Input() chartLabels!: string[];
  @Input() chartColors!: string[];
  @Input() chartType!: any;

  constructor() { }
  ngOnInit() {
    this.chartOptions = {
      series: this.chartSeries,
      chart: {
        width: 380,
        type: this.chartType,
      },
      labels: this.chartLabels,
      colors: this.chartColors,
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
