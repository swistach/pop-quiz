import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionsService } from 'src/app/questions.service';

@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.scss']
})
export class PageQuizComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService
      .getQuestions()
      .subscribe((questions) => {
        this.questions = questions
      });
  }
}
