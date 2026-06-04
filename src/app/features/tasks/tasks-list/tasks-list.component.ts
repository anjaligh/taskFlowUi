import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
import { TicketModel } from 'src/app/core/model/ticket-model';
import { EMPLOYEES, TICKET_FILTER_OPTIONS } from 'src/app/data/filterOptions';
import { TICKET_LIST } from 'src/app/data/ticketData';
import { TasksListService } from './tasks-list.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formFieldModel } from 'src/app/core/model/form-field-model';
import { DatePipe } from '@angular/common';
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
  editForm: any = false;
  constructor(public tasksService: TasksListService, private fb: FormBuilder, private datePipe: DatePipe) {
    this.taskListCurrent$ = this.tasksService.filteredArray$
  }
  ngOnInit() {
    this.taskFilterOptions = TICKET_FILTER_OPTIONS;
    this.taskType = this.taskFilterOptions.filter(item => item.group === 'Type');
    this.taskPriority = this.taskFilterOptions.filter(item => item.group === 'Priority');
    this.taskStatus = this.taskFilterOptions.filter(item => item.group === 'Status');
    this.taskAssignee = EMPLOYEES
    this.taskFormFields = [
      { label: 'Title', controlName: 'title', type: 'text', placeholder: 'Enter Task title', errorMsg: 'Title must contain only letters' },
      { label: 'Type', controlName: 'type', type: 'select', placeholder: 'Select Task type', options: { data: this.taskType, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Status', controlName: 'status', type: 'select', placeholder: 'Select Task Status', options: { data: this.taskStatus, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Assignee', controlName: 'assignee', type: 'select', placeholder: 'Select Assignee', options: { data: this.taskAssignee, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Priority', controlName: 'priority', type: 'select', placeholder: 'Select Task priority', options: { data: this.taskPriority, bindlabel: 'label', bindValue: 'value' } },
      { label: 'Due Date', controlName: 'dueDate', type: 'date', placeholder: 'Select Due Date' }
    ]
    let group: any = {};
    // this.taskFormFields.forEach(field => group[field.controlName] = ['', Validators.required])
    this.taskFormGroup = this.fb.group({
      id:[''],
      title: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      type: ['', Validators.required],
      status: ['', Validators.required],
      assignee: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      createdAt:[''],
    })
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
  deleteMultiple() {
    if (this.selectedIds.size === 0) {
      Swal.fire({
        title: 'No Item Selected!',
        text: 'Select an item to delete',
        confirmButtonText: 'ok'
      })
    } else {
      Swal.fire({
        title: 'Delete!',
        text: 'Are you sure you want to delete multiple records?',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.selectedIds.forEach(id => this.tasksService.deleteData(id))
          Swal.fire({
            title: 'Successfully Deleted!',
            text: 'Record deleted successfully',
            confirmButtonText: 'Close',
          })
        }
      })
    }

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
    console.log(this.taskFormGroup.value.id)
    const newData = {
      id: this.editForm ? this.taskFormGroup.value.id : `TKT-1${(this.tasksService.totalRecords + 1)}`,
      title: event.title,
      type: event.type,
      status: event.status,
      priority: event.priority,
      assignee: event.assignee,
      createdAt: this.editForm ? this.taskFormGroup.value.createdAt : new Date().toISOString(),
      dueDate: event?.dueDate.toISOString(),
    }
    if (!this.editForm) {
      this.tasksService.addData(newData)
      this.closeModal();
      setTimeout(() => {
        Swal.fire({
          title: 'Data saved successfully!',
          confirmButtonText: 'Close'
        })
      }, 100);
    } else {
      this.tasksService.updateData(newData);
      this.closeModal();
      setTimeout(() => {
        Swal.fire({
          title: 'Data updated successfully!',
          confirmButtonText: 'Close'
        })
      }, 100);
      this.editForm = false;
    }

  }
  closeModal() {
    this.taskFormGroup.reset();
    let group: any = {};
    this.taskFormFields.forEach(field => group[field.controlName] = [''])
    this.taskFormGroup.reset(group)
    this.visible = false;
  }
  editTask(task: any) {
    this.editForm = true;
    this.taskFormGroup?.get('id')?.setValue(task.id);
    this.taskFormGroup?.get('title')?.setValue(task.title);
    this.taskFormGroup?.get('assignee')?.setValue(task.assignee);
    this.taskFormGroup?.get('type')?.setValue(task.type);
    this.taskFormGroup?.get('status')?.setValue(task.status);
    this.taskFormGroup?.get('priority')?.setValue(task.priority);
    this.taskFormGroup?.get('dueDate')?.setValue(this.datePipe.transform(task.dueDate, 'dd/MM/yy'));
    this.taskFormGroup?.get('createdAt')?.setValue(this.datePipe.transform(task.createdAt, 'dd/MM/yy'));
    this.visible = true;
  }
}
