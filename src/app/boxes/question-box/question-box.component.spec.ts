import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesignSystemModule } from 'projects/design-system/src/public-api';

import { QuestionBoxComponent } from './question-box.component';

describe('QuestionBoxComponent', () => {
  let component: QuestionBoxComponent;
  let fixture: ComponentFixture<QuestionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DesignSystemModule,
      ],
      declarations: [ QuestionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBoxComponent);
    component = fixture.componentInstance;
    component.question = {
      idx: 0,
      picture: {
        description: '',
        url: ''
      },
      answer: '',
      options: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
