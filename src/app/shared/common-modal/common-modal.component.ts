import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
  standalone:true,
  imports:[DialogModule, CommonModule]
})
export class CommonModalComponent {
 @Input() visible!: boolean;
 @Input() types!: any[];
 ngOnChanges(){
  console.log((this.visible));
  
 }
}
