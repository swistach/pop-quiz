import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-box',
  templateUrl: './start-box.component.html',
  styleUrls: ['./start-box.component.scss']
})
export class StartBoxComponent {
  constructor(
    private router: Router,
  ) { }

  onClick() {
    console.log('StartBoxComponent.onClick');

    this.router.navigate(['/quiz']);
  }
}
