import { Component, Input } from '@angular/core';
import { ButtonDisplay, ButtonVariant } from '../enums/button';

@Component({
  selector: 'ds-button',
  template: `<button [class]="[variant, display]"><ng-content></ng-content></button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor() { }

  @Input() display: ButtonDisplay | string = ButtonDisplay.InlineBlock;
  @Input() variant: ButtonVariant | string = ButtonVariant.Primary;
}
