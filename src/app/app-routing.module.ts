import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageQuizComponent } from './pages/page-quiz/page-quiz.component';
import { PageStartComponent } from './pages/page-start/page-start.component';
import { PageSummaryComponent } from './pages/page-summary/page-summary.component';

const routes: Routes = [
  { path: 'quiz', component: PageQuizComponent },
  { path: 'summary', component: PageSummaryComponent },
  { path: '', pathMatch: 'full', component: PageStartComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
