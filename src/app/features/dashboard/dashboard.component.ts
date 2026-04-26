import { Component, ViewChild } from '@angular/core';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { BUGS_TREND, LAST_WEEK_COMPLETION_SUMMARY, SAMPLE_TICKETS, SUMMARY_DATA, TICKET_CATEGORIES, TICKET_STATUSES } from 'src/app/data/ticketData';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chartSeries: number[] = [];
  chartLabels!: string[];
  categoryChartSeries: number[] = [];
  categoryChartLabels!: string[]
  chartColors!: string[];
  breadcrumbItems = [
    { label: 'Dashboard', url: '' }
  ]
  summaryCards !: any[]
  bugsTrend !: any
  tabNames = ['Bugs Reported', 'Bugs Resolved'];
  selectedTab = 'Bugs Reported';
  lineChartSeries !: { name: string, data: number[] };
  weeklyTaskCompletion!: any;
  ngOnInit() {
    this.chartColors = ['#AEC7ED', '#94E9B8', '#92BFFF', '#6BE6D3', '#B899EB'];
    this.chartLabels = TICKET_STATUSES;
    this.chartSeries = TICKET_STATUSES.map(statusItem => {
      return SAMPLE_TICKETS.filter(ticket => ticket.status == statusItem).length
    })
    this.categoryChartLabels = TICKET_CATEGORIES;
    this.categoryChartSeries = TICKET_CATEGORIES.map(categoryItem => {
      return SAMPLE_TICKETS.filter(ticket => ticket.category === categoryItem).length;
    })
    this.summaryCards = SUMMARY_DATA;
    this.bugsTrend = BUGS_TREND;
    this.lineChartSeries = this.bugsTrend.series.find((trend: any) => trend.name === this.selectedTab);
    this.weeklyTaskCompletion = LAST_WEEK_COMPLETION_SUMMARY  }
  trackByTitle = (index: number, item: any) => {
    return item.title
  }
  selectTab = (tab: string) => {
    this.selectedTab = tab;
    this.lineChartSeries = this.bugsTrend.series.find((trend: any) => trend.name === this.selectedTab);
  }
}
