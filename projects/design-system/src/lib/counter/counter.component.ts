import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-counter',
  template: `<span class="circle bg-secondary">{{current}}/{{max}}</span>`,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() current: number = 0;
  @Input() max: number = 0;

  constructor() { }

  ngOnInit(): void {}
}
