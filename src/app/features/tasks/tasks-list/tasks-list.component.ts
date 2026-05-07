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
  ticketListCurrent$!: Observable<TicketModel[]>;
  ticketFilterOptions!: any[];
  selectedIds = new Set<string>;
  constructor(public tasksService: TasksListService) {
    this.ticketListCurrent$ = this.tasksService.filteredArray$
  }
  ngOnInit() {
    this.ticketFilterOptions = TICKET_FILTER_OPTIONS;
  }
  selectAll(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.tasksService.allData.forEach((ticket: any) => this.selectedIds.add(ticket.id))
    } else {
      this.selectedIds.clear()
    }
    
  }
  isAllSelected(){
    return this.tasksService.allData.every(item=>this.selectedIds.has(item.id))
  }
  selectTicket(event: any, value: string) {
    const checked = event.target.checked;
    if (checked) {
      this.selectedIds.add(value);
    } else {
      this.selectedIds.delete(value)
    }
    
  }
  filterData(event:any){
    if(event=== 'clear'){
      this.tasksService.setFilter('','')
    }else{
    this.tasksService.setFilter(event.group,event.value)
    }
    
  }
  onSearch(event:any){
    this.selectedIds.clear();
    this.tasksService.searchText=event
  }
  pageChange(event: any) {
    this.tasksService.setPage(event.first, event.rows);
  }
}
