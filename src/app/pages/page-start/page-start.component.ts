import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-page-start',
  templateUrl: './page-start.component.html',
  styleUrls: ['./page-start.component.scss']
})
export class PageStartComponent implements OnInit {
  canContinue: boolean = false;

  constructor(private _questions: QuestionsService) { }

  ngOnInit(): void {
    this.canContinue = this._questions.countAnswers() > 0;
  }
}
