import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-page-summary',
  templateUrl: './page-summary.component.html',
  styleUrls: ['./page-summary.component.scss']
})
export class PageSummaryComponent implements OnInit {
  score!: string;
  summary: string = 'Not bad, but not good. Give yourself a chance and try again!';

  constructor(
    private questionsService: QuestionsService,
  ) { }

  ngOnInit(): void {
    this.score = this.questionsService.getScore();
    this.questionsService.resetProgress();
  }

}
