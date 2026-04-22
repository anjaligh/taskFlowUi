import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexGrid, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

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
    stroke: ApexStroke,
    markers: ApexMarkers,
    grid: ApexGrid
  };
  @Input() chartSeries!: { name: string; data: number[] };
  @Input() chartXaxis!: string[];
  @Input() chartType!: any;
  constructor() { }
  ngOnChanges() {
    this.chartOptions = {
      series: [
        {
          name: this.chartSeries.name,
          data: this.chartSeries.data,
          color: '#AF52DE'
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: { enabled: false }
      },
      title: {},
      xaxis: {
        categories: this.chartXaxis
      },
      stroke: {
        width: [2],
      },
      markers:{
         size: 5,
         colors:['#ffffff'],
         strokeColors: '#000000',
         strokeWidth:4
      },
      grid:{
        show: false
      }
    };
  }

}
