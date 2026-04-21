import { CommonModule } from '@angular/common';
import { Component, Input, isStandalone } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class SummaryCardComponent {
  @Input() title !: string;
  @Input() percent !: string;
  @Input() icon !: string;
  @Input() count !: number;
  @Input() isEven !: boolean;
  getTrendIcon = (percent: string) => {
    if (percent.startsWith('+')) {
      return 'fas fa-arrow-trend-up'
    } else {
      return 'fas fa-arrow-trend-down'
    }
  }
}
