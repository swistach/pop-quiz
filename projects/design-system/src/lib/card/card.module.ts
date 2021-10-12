import { NgModule } from '@angular/core';

import { CardActionComponent } from './card-action/card-action.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardMediaComponent } from './card-media/card-media.component';
import { CardSupportingTextComponent } from './card-supporting-text/card-supporting-text.component';

@NgModule({
  declarations: [
    CardActionComponent,
    CardContainerComponent,
    CardHeaderComponent,
    CardMediaComponent,
    CardSupportingTextComponent,
  ],
  exports: [
    CardActionComponent,
    CardContainerComponent,
    CardHeaderComponent,
    CardMediaComponent,
    CardSupportingTextComponent,
  ]
})
export class CardModule { }
