import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageStartComponent } from './pages/page-start/page-start.component';
import { PageQuizComponent } from './pages/page-quiz/page-quiz.component';
import { PageSummaryComponent } from './pages/page-summary/page-summary.component';
import { StartBoxComponent } from './boxes/start-box/start-box.component';
import { ContinueBoxComponent } from './boxes/continue-box/continue-box.component';
import { SummaryBoxComponent } from './boxes/summary-box/summary-box.component';
import { QuestionBoxComponent } from './boxes/question-box/question-box.component';
import { DesignSystemModule } from 'projects/design-system/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    PageStartComponent,
    PageQuizComponent,
    PageSummaryComponent,
    StartBoxComponent,
    ContinueBoxComponent,
    SummaryBoxComponent,
    QuestionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
