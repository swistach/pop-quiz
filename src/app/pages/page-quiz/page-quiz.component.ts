import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../types/question';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.scss']
})
export class PageQuizComponent implements OnInit {
  currentQuestion = 0;
  total = 0;
  question!: Question;

  constructor(
    private router: Router,
    private questionsService: QuestionsService,
  ) {}

  ngOnInit() {
    this.getTotal();
    this.getCurrentQuestion();
    this.getNextQuestion();
  }

  getTotal() {
    this.total = this.questionsService.countQuestions();
  }
  getCurrentQuestion() {
    this.currentQuestion = this.questionsService.countAnswers()
  }
  getNextQuestion() {
    if (this.total === this.currentQuestion) {
      this.router.navigate(['/summary']);
      return;
    }

    this.question = this.questionsService.getQuestion(this.currentQuestion);
    this.currentQuestion = this.currentQuestion + 1;
  }

  onAnswered({ idx, answer}: {idx: number, answer: string}) {
    this.questionsService.setAnswer(idx, answer);
    this.questionsService.saveProgress()

    this.getNextQuestion();
  }

}
