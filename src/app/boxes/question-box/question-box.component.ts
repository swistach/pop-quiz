import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../types/question';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent {
  @Input() question!: Question;
  @Input() current!: number;
  @Input() total!: number;
  @Output() answerEvent = new EventEmitter();

  picked!: string;

  onChange(item: string) {
    this.picked = item;
  }

  onClick() {
    this.answerEvent.emit({
      idx: this.question.idx,
      answer: this.picked,
    });
  }
}
