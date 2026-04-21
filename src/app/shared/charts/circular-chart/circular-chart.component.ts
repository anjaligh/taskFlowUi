import { Component, Input, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrls: ['./circular-chart.component.css'],
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
})
export class CircularChartComponent {
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
