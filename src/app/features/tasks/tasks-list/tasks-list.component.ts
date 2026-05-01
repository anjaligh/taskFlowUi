import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_FILTER_OPTIONS } from 'src/app/data/filterOptions';
import { TICKET_LIST } from 'src/app/data/ticketData';
import { TasksListService } from './tasks-list.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  ticketList!: TicketModel[];
  ticketListCurrent$!: Observable<TicketModel[]>;
  ticketFilterOptions!: any[];
  selectedIds = new Set<string>;
  first = 0;
  page = 1;
  rows = 5;
  rowsPerPage = [5, 10, 15];
  totalRecords = 0;
  searchText!: string;
  constructor(private tasksService: TasksListService) {
    this.ticketListCurrent$ = this.tasksService.filteredArray$
  }
  ngOnInit() {
    this.ticketList = TICKET_LIST;
    this.totalRecords = this.ticketList.length;
    // this.ticketListCurrent = this.ticketList.slice(0, this.rows - 1)
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
    let updatedList !: TicketModel[]
    if (this.rows !== event.rows) {
      this.first = 0
      this.rows = event.rows;
      updatedList = this.ticketList.slice(0, this.rows - 1)
    }
    else {
      this.first = event.first
      updatedList = this.ticketList.slice(event.first, this.rows + event.first)
    }
    this.tasksService.setData(updatedList);
  }
}
