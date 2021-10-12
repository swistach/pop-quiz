import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutBlockComponent } from './layout-block/layout-block.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';

@NgModule({
  declarations: [
    LayoutBlockComponent,
    LayoutContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutBlockComponent,
    LayoutContainerComponent,
  ]
})
export class LayoutModule { }
