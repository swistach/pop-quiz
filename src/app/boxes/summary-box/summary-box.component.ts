import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.scss']
})
export class SummaryBoxComponent {
  @Input() score!: string;
  @Input() summary!: string;

  constructor(
    private router: Router,
  ) { }

  onClick() {
    this.router.navigate(['/quiz']);
  }

}
