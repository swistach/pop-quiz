import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-start-box',
  templateUrl: './start-box.component.html',
  styleUrls: ['./start-box.component.scss']
})
export class StartBoxComponent {
  constructor(
    private questionService: QuestionsService,
    private router: Router,
  ) { }

  onClick() {
    this.questionService.resetProgress();
    this.router.navigate(['/quiz']);
  }
}
