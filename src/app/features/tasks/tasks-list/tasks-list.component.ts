import { Component } from '@angular/core';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_LIST } from 'src/app/data/ticketData';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
ticketList!: TicketModel[]
ngOnInit(){
  this.ticketList = TICKET_LIST
}
}
