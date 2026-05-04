import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, map, Observable, of, Subject, switchMap } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { TICKET_LIST } from 'src/app/data/ticketData';
interface State {
  searchTerm: string;
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

  filteredArray$ = new BehaviorSubject<TicketModel[]>([]);
  search$ = new Subject<void>();

  private _state: State = {
    searchTerm: ''
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

    let data = this.filteredArray$.value;

    const filtered = data.filter(item => matches(item, searchTerm));
    return of(filtered);
  }

  fetchData() {
    this.setData(TICKET_LIST);
  }

  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }

  setData(data: TicketModel[]) {
    this.filteredArray$.next(data);
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this.search$.next();
  }
}
