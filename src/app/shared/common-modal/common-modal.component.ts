import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { formFieldModel } from 'src/app/core/model/form-field-model';
@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
  standalone: true,
  imports: [DialogModule, CommonModule, ReactiveFormsModule]
})
export class CommonModalComponent {
  @Input() visible!: boolean;
  @Input() formFields!: formFieldModel[];
  @Input() formGroup!: FormGroup;
  @Output() submitEvent =new EventEmitter();
  //  @Output() closeDialog =new EventEmitter();
   @Output() visibleChange =new EventEmitter<boolean>();

  submitForm() {
    console.log(this.formGroup.value);
    
    this.submitEvent.emit(this.formGroup.value)
  }

}
