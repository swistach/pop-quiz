import { Component } from '@angular/core';

@Component({
  selector: 'ds-layout-container',
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent {

}
