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
ticketList!: TicketModel[]
ticketFilterOptions!: any[];
ngOnInit(){
  this.ticketList = TICKET_LIST;
  this.ticketFilterOptions = TICKET_FILTER_OPTIONS
}
}
