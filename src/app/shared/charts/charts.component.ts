import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ChartComponent,
} from 'ng-apexcharts';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { SAMPLE_TICKETS, TICKET_STATUSES } from 'src/app/data/ticketData';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  @Input() chartSeries!: number[];
  @Input() chartLabels!: string[];

  constructor() {}
  ngOnInit() {
    this.chartOptions = {
      series: this.chartSeries,
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: this.chartLabels,
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
