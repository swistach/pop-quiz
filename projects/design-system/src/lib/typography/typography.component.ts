import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[ds-typography]',
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./typography.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypographyComponent {}
