import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title?: ApexTitleSubtitle;
// };
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  standalone: true,
  imports: [
    NgApexchartsModule,
    CommonModule
  ],
})
export class LineChartComponent {
  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions !: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
  };
  @Input() chartSeries!: { name: string; data: number[] };
  @Input() chartXaxis!: string[];
  @Input() chartType!: any;
  constructor() { }
  ngOnInit() {
    this.chartOptions = {
      series: [
          {
            name: this.chartSeries.name,
            data: this.chartSeries.data
          }
        ],
      chart: {
        height: 350,
        type: "line",
        zoom: { enabled: false }
      },
      title: {
        text: this.chartSeries.name
      },
      xaxis: {
        categories: this.chartXaxis
      }
    };
  }
  
}
