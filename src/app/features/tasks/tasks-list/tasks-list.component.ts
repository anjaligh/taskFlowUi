import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_FILTER_OPTIONS } from 'src/app/data/filterOptions';
import { TICKET_LIST } from 'src/app/data/ticketData';
import { TasksListService } from './tasks-list.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  ticketListCurrent$!: Observable<TicketModel[]>;
  ticketFilterOptions!: any[];
  ticketType!: any[];
  ticketPriority!: any[];
  ticketAssignee!: any[];
  ticketStatus!: any[];
  selectedIds = new Set<string>;
  visible= false;
  constructor(public tasksService: TasksListService) {
    this.ticketListCurrent$ = this.tasksService.filteredArray$
  }
  ngOnInit() {
    this.ticketFilterOptions = TICKET_FILTER_OPTIONS;
    this.ticketType = this.ticketFilterOptions.filter(item=>item.group === 'Type');
    this.ticketPriority = this.ticketFilterOptions.filter(item=>item.group === 'Priority');
    this.ticketStatus = this.ticketFilterOptions.filter(item=>item.group === 'Status');
  }
  selectAll(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.tasksService.allData.forEach((ticket: any) => this.selectedIds.add(ticket.id))
    } else {
      this.selectedIds.clear()
    }

  }
  isAllSelected() {
    return this.tasksService.allData.every(item => this.selectedIds.has(item.id))
  }
  selectTicket(event: any, value: string) {
    const checked = event.target.checked;
    if (checked) {
      this.selectedIds.add(value);
    } else {
      this.selectedIds.delete(value)
    }

  }
  filterData(event: any) {
    this.tasksService.setPage(0);
    this.selectedIds.clear();
    if (event === 'clear') {
      this.tasksService.setFilter('', '')
    } else {
      this.tasksService.setFilter(event.group, event.value)
    }

  }
  onSearch(event: any) {
    this.selectedIds.clear();
    this.tasksService.searchText = event
  }
  pageChange(event: any) {
    this.tasksService.setPage(event.first, event.rows);
  }
  deleteItemConfirm(event: any) {
    Swal.fire({
      title: 'Delete!',
      text: 'Are you sure you want to delete this record?',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      showCancelButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.tasksService.deleteData(event);
        Swal.fire({
          title: 'Successfully Deleted!',
          text:'Record deleted successfully',
          confirmButtonText: 'Close',
        })
      }
      
    })
  }
  openModal(){
    this.visible =true;
  }
}
