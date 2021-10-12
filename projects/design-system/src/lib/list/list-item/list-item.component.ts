import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-list-item',
  template: `
    <li>
      <label>
        <ng-content></ng-content>
      </label>
    </li>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
