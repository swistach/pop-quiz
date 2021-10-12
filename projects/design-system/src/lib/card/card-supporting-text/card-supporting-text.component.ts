import { Component } from '@angular/core';

@Component({
  selector: 'ds-card-supporting-text',
  template: `
    <div class="card-supporting-text">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card-supporting-text.component.scss']
})
export class CardSupportingTextComponent {}
