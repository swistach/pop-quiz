import { Component } from '@angular/core';

@Component({
  selector: 'ds-list-group',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent {
}
