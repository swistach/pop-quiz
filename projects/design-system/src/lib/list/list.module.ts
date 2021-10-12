import { NgModule } from '@angular/core';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RadioInputComponent } from './radio-input/radio-input.component';

@NgModule({
  declarations: [
    ListGroupComponent,
    ListItemComponent,
    RadioInputComponent,
  ],
  exports: [
    ListGroupComponent,
    ListItemComponent,
    RadioInputComponent,
  ]
})
export class ListModule { }
