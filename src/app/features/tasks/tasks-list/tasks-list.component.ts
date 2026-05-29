import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { EMPLOYEES, TICKET_FILTER_OPTIONS } from 'src/app/data/filterOptions';
import { TICKET_LIST } from 'src/app/data/ticketData';
import { TasksListService } from './tasks-list.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldModel } from 'src/app/core/model/form-field-model';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  taskListCurrent$!: Observable<TicketModel[]>;
  taskFilterOptions!: any[];
  taskType!: any[];
  taskPriority!: any[];
  taskAssignee!: any[];
  taskStatus!: any[];
  selectedIds = new Set<string>;
  visible = false;
  taskFormGroup !: FormGroup;
  taskFormFields!: formFieldModel[];
  constructor(public tasksService: TasksListService, private fb: FormBuilder) {
    this.taskListCurrent$ = this.tasksService.filteredArray$
  }
  ngOnInit() {
    this.taskFilterOptions = TICKET_FILTER_OPTIONS;
    this.taskType = this.taskFilterOptions.filter(item => item.group === 'Type');
    this.taskPriority = this.taskFilterOptions.filter(item => item.group === 'Priority');
    this.taskStatus = this.taskFilterOptions.filter(item => item.group === 'Status');
    this.taskAssignee = EMPLOYEES
    this.taskFormFields = [
      { label: 'Title', controlName: 'title', type: 'text', placeholder: 'Enter Task title' },
      { label: 'Type', controlName: 'type', type: 'select', placeholder: 'Select Task type', options: { data: this.taskType, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Status', controlName: 'status', type: 'select', placeholder: 'Select Task Status', options: { data: this.taskStatus, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Assignee', controlName: 'assignee', type: 'select', placeholder: 'Select Assignee', options: { data: this.taskAssignee, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Priority', controlName: 'priority', type: 'select', placeholder: 'Select Task priority', options: { data: this.taskPriority, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Due Date', controlName: 'dueDate', type: 'date', placeholder: 'Select Due Date' }
    ]
    let group: any = {};
    this.taskFormFields.forEach(field => group[field.controlName] = ['', Validators.required])
    this.taskFormGroup = this.fb.group(group)
  }
  selectAll(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.tasksService.allData.forEach((task: any) => this.selectedIds.add(task.id))
    } else {
      this.selectedIds.clear()
    }

  }
  isAllSelected() {
    return this.tasksService.allData.every(item => this.selectedIds.has(item.id))
  }
  selectTask(event: any, value: string) {
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
      if (result.isConfirmed) {
        this.tasksService.deleteData(event);
        Swal.fire({
          title: 'Successfully Deleted!',
          text: 'Record deleted successfully',
          confirmButtonText: 'Close',
        })
      }

    })
  }
  openModal() {
    this.visible = true;
  }
  submitForm(event: any) {
    console.log(typeof (event));

    const newData = {
      id: `TKT-1${(this.tasksService.totalRecords + 1)}`,
      title: event.title,
      type: event.type,
      status: event.status,
      priority: event.priority,
      assignee: event.assignee,
      createdAt: new Date().toISOString(),
      dueDate: event.dueDate.toISOString(),
    }
    this.tasksService.addData(newData)
    this.closeModal();
    setTimeout(() => {
      Swal.fire({
        title: 'Data saved successfully!',
        confirmButtonText: 'Close'
      })
    }, 100);


  }
  closeModal() {
    this.taskFormGroup.reset();
    let group: any = {};
    this.taskFormFields.forEach(field => group[field.controlName] = [''])
    this.taskFormGroup.reset(group)
    this.visible = false;
  }
}
