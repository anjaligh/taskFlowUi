import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { formFieldModel } from 'src/app/core/model/form-field-model';
@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
  standalone: true,
  imports: [DialogModule, CommonModule, ReactiveFormsModule, CalendarModule]
})
export class CommonModalComponent {
  @Input() visible!: boolean;
  @Input() formFields!: formFieldModel[];
  @Input() formGroup!: FormGroup;
  @Output() submitEvent = new EventEmitter();
  @Output() closeDialog = new EventEmitter();
  @Output() visibleChange = new EventEmitter<boolean>();
  submitted = false;
  tomorrow !: Date;
  ngOnInit() {
    const today = new Date();
    this.tomorrow = new Date(today);
    this.tomorrow.setDate(today.getDate() + 1)
  }
  submitForm() {
    console.log(this.formGroup.value);
    this.submitted = true;
    if (this.formGroup.valid) {
      this.submitEvent.emit(this.formGroup.value)
    }

  }

  get form() {
    return this.formGroup.controls;
  }

  close() {
    this.visibleChange.emit(false);
    this.closeDialog.emit()
  }
}
