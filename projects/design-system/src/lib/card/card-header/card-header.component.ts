import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-card-header',
  template: `
    <div class="card-header">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
