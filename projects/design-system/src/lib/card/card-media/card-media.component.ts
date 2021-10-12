import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-card-media',
  template: `
    <img [src]="src" [alt]="alt"/>
  `,
  styleUrls: ['./card-media.component.scss']
})
export class CardMediaComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
