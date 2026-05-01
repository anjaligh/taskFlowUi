import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_LIST } from 'src/app/data/ticketData';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  private _filteredArray$ = new BehaviorSubject<TicketModel[]>([])
  filteredArray$ = this._filteredArray$.asObservable();

  constructor() {
    this.fetchData();
  }
  filterData = (type: string, value: any) => {

  }
  fetchData() {
    this.setData(TICKET_LIST)

  }
  setData(data: any[]) {
    this._filteredArray$.next(data);
  }
}
