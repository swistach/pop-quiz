import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnsweredGuard } from './answered.guard';

describe('AnsweredGuard', () => {
  let guard: AnsweredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ]
    });
    guard = TestBed.inject(AnsweredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
