import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-radio-input',
  template: `
    <input type="radio" [name]="name" [value]="value"/>
  `,
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  @Input() name?: string | number;
  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
