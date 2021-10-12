import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-card-container',
  template: `
    <div class="card-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
