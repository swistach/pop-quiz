import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continue-box',
  templateUrl: './continue-box.component.html',
  styleUrls: ['./continue-box.component.scss']
})
export class ContinueBoxComponent {
  constructor(
    private router: Router,
  ) { }

  onClick() {
    this.router.navigate(['/quiz']);
  }
}
