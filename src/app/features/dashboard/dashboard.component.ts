import { Component, ViewChild } from '@angular/core';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { SAMPLE_TICKETS, TICKET_CATEGORIES, TICKET_STATUSES } from 'src/app/data/ticketData';


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
  ngOnInit() {
    this.chartLabels = TICKET_STATUSES;
    this.chartSeries = TICKET_STATUSES.map(statusItem => {
      return SAMPLE_TICKETS.filter(ticket => ticket.status == statusItem).length
    })
    this.categoryChartLabels = TICKET_CATEGORIES;
    this.categoryChartSeries = TICKET_CATEGORIES.map(categoryItem => {
      return SAMPLE_TICKETS.filter(ticket => ticket.category === categoryItem).length;
    })
  }
}
