import { NgModule } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { CounterModule } from './counter/counter.module';
import { LayoutModule } from './layout/layout.module';
import { ListModule } from './list/list.module';
import { TypographyModule } from './typography/typography.module';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CounterModule,
    LayoutModule,
    ListModule,
    TypographyModule,
  ],
})
export class DesignSystemModule { }
