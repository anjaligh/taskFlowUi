import { Component, Input, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// }
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  standalone: true,
  imports: [NgApexchartsModule]
})
export class BarChartComponent {
  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions!: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    plotOptions:ApexPlotOptions;
    dataLabels:ApexDataLabels;
  };
  @Input() chartSeries!: { name: string; data: number[] };
  @Input() chartXaxis!: string[];
  constructor() {}
  ngOnChanges(){
    this.chartOptions = {
      series: [
        {
          name: this.chartSeries.name,
          data: this.chartSeries.data
        }
      ],
      plotOptions:{
        bar:{
          columnWidth:'50%',
          borderRadius:4,
          borderRadiusApplication:'end'
        }
      },
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: ''
      },
      xaxis: {
        categories: this.chartXaxis
      },
      dataLabels:{
        enabled:false
      }
    };
  }
}
