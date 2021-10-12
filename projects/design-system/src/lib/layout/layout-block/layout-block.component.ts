import { Component } from '@angular/core';

@Component({
  selector: 'ds-layout-block',
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./layout-block.component.scss']
})
export class LayoutBlockComponent {}
