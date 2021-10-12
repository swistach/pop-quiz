import { Component } from '@angular/core';

@Component({
  selector: 'ds-list-group',
  template: `
    <form>
      <ul>
        <ng-content></ng-content>
      </ul>
    </form>
  `,
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent {
}
