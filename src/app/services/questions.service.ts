import { Injectable } from '@angular/core';

import DATA from '../../assets/questions.json';
import { AnswerRaw, Answers, Question } from '../types';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  static generateQuestions(): Question[] {
    return DATA as Question[];
  }

  private _answers: Answers = new Map();
  private _questions!: Question[];

  constructor(private _storage: StorageService) {
    this._questions = QuestionsService.generateQuestions();
    this.loadProgress();
  }

  loadProgress() {
    const loadedAnswers: AnswerRaw[] = this._storage.load();

    if (!loadedAnswers) {
      return;
    }

    this._answers = new Map(loadedAnswers);
  }

  getLength() {
    return this._questions?.length;
  }

  getAnswers() {
    return this._answers.size;
  }

  saveProgress() {
    this._storage.save([...this._answers.entries()]);
  }

  areAnsweredAll() {
    return this._questions.length === this._answers.size;
  }

  hasAlreadyStarted() {
    return this._answers.size > 0;
  }

  getQuestion(idx: number) {
    return this._questions[idx];
  }

  answer(idx: number, answer: string) {
    this._answers.set(idx, answer);
  }

  reset() {
    this._storage.remove();
    this._answers.clear();
  }

  getScore() {
    return `${[...this._answers.entries()]
      .reduce((acc, [id, answer]) => {
        const diff = this._questions[id]?.answer === answer ? 1 : 0;

        return acc + diff;
      }, 0)}/${this.getLength()}`
  }
}
