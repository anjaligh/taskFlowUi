import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
  imports: [PaginatorModule,]
})
export class PaginationComponent {
  @Input() first !: number;
  @Input() rows !: number;
  @Input() totalRecords !: number
  @Input() rowsPerPageOptions !: number[]
  @Output() pageChange = new EventEmitter
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.pageChange.emit(event)
    console.log(event);
    
  }
}
