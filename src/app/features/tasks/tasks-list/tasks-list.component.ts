import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
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
  searchText!: string;
  constructor(public tasksService: TasksListService) {
    this.ticketListCurrent$ = this.tasksService.filteredArray$
  }
  ngOnInit() {
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
    console.log((event));
    
    this.tasksService.setPage(event.first, event.rows);
  }
}
