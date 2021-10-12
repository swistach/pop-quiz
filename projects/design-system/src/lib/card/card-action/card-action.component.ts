import { Component } from '@angular/core';

@Component({
  selector: 'ds-card-action',
  template: `
  <div class="card-action">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent {}
