import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, map, Observable, of, Subject, switchMap } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_LIST } from 'src/app/data/ticketData';
interface State {
  searchTerm: string;
  activeFIlterGroup: string;
  activeFIlterValue: string;
  first: number;
  page: number;
  rows: number;
  rowsPerPage: number[];
  totalRecords: number;
}
function matches(obj: any, term: string): boolean {
  return Object.values(obj).some(value =>
    String(value).toLowerCase().includes(term.toLowerCase())
  );
}
@Injectable({
  providedIn: 'root'
})

export class TasksListService {
  private _data: TicketModel[] = [];
  filteredArray$ = new BehaviorSubject<TicketModel[]>([]);
  search$ = new Subject<void>();

  private _state: State = {
    searchTerm: '',
    activeFIlterGroup: '',
    activeFIlterValue: '',
    first: 0,
    page: 1,
    rows: 5,
    rowsPerPage: [5, 10, 15],
    totalRecords: 0
  };

  constructor() {
    this.search$.pipe(
      debounceTime(200),
      switchMap(() => this._search())
    ).subscribe(result => {
      this.filteredArray$.next(result);
    });
    this.fetchData();
  }

  private _search(): Observable<TicketModel[]> {
    const { searchTerm } = this._state;
    let filtered = this._data.filter(item => matches(item, searchTerm));
    if (this._state.activeFIlterGroup && this._state.activeFIlterValue) {
      filtered = filtered.filter((item: any) => item[this._state.activeFIlterGroup.toLowerCase()] === this._state.activeFIlterValue)
    }
    this._state.totalRecords = filtered.length;
    const paginatedData = filtered.slice(this._state.first, this._state.first + this._state.rows)
    return of(paginatedData);
  }

  fetchData() {
    this._data = TICKET_LIST;
    this.search$.next();
  }

  set searchText(searchTerm: string) {
    this._set({ searchTerm });
  }
  set activeFIlterGroup(activeFIlterGroup: string) {
    this._set({ activeFIlterGroup });
  }
  set activeFIlterValue(activeFIlterValue: string) {
    this._set({ activeFIlterValue });
  }

  get first() { return this._state.first; }
  get rows() { return this._state.rows; }
  get rowsPerPage() { return this._state.rowsPerPage; }
  get totalRecords() { return this._state.totalRecords; }
  get allData(): TicketModel[] {
    return this._data
  }
  setData(data: TicketModel[]) {
    this.filteredArray$.next(data);
  }
  addData(data: TicketModel) {
    this._data = [...this._data, data]
    this.search$.next();
  }
  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this.search$.next();
  }

  setPage(first: number, rows: number = this._state.rows) {
    const newFirstVal = this._state.rows !== rows ? 0 : first
    this._set({ first: newFirstVal, rows });
  }
  setFilter(activeFIlterGroup: string, activeFIlterValue: string) {
    this._set({ activeFIlterGroup, activeFIlterValue });
  }
  deleteData(id: string) {
    const index = this._data.findIndex((item: any) => item.id === id);
    this._data.splice(index, 1)
    this.search$.next();
  }
  updateData(data:TicketModel) {
    const index = this._data.findIndex((item: any) => item.id === data.id);
    this._data[index]= data;
    this.search$.next();
  }
}
