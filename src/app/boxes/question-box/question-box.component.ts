import { Component, Input } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent {
  @Input() question!: Question;
  @Input() current!: number;
  @Input() total!: number;
}
