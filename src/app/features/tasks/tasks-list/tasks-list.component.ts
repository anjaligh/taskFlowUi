import { Component } from '@angular/core';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_FILTER_OPTIONS } from 'src/app/data/filterOptions';
import { TICKET_LIST } from 'src/app/data/ticketData';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  ticketList!: TicketModel[];
  ticketListCurrent!: TicketModel[];
  ticketFilterOptions!: any[];
  selectedIds = new Set<string>;
  first = 0;
  page = 1;
  rows = 5;
  rowsPerPage = [5, 10, 15];
  totalRecords = 0;
  ngOnInit() {
    this.ticketList = TICKET_LIST;
    this.totalRecords = this.ticketList.length;
    this.ticketListCurrent = this.ticketList.slice(0, this.rows - 1)
    this.ticketFilterOptions = TICKET_FILTER_OPTIONS;
  }
  selectAll(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.ticketList.forEach((ticket: any) => this.selectedIds.add(ticket.id))
    } else {
      this.selectedIds.clear()
    }
  }
  selectTicket(event: any, value: string) {
    const checked = event.target.checked;
    if (checked) {
      this.selectedIds.add(value);
    } else {
      this.selectedIds.delete(value)
    }

  }
  pageChange(event: any) {
    if (this.rows !== event.rows) {
      this.first = 0
      this.rows = event.rows;
      this.ticketListCurrent = this.ticketList.slice(0, this.rows - 1)
    }
    else {
      this.first = event.first
      this.ticketListCurrent = this.ticketList.slice(event.first, this.rows + event.first)
    }

  }
}
