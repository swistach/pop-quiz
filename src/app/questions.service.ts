import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import DATA from '../assets/questions.json';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  getQuestions(): Observable<Question[]> {
    const questions = of(DATA);

    return questions;
  }
}
