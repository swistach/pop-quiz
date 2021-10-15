import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesignSystemModule } from 'projects/design-system/src/public-api';
import { QuestionBoxComponent } from 'src/app/boxes/question-box/question-box.component';

import { PageQuizComponent } from './page-quiz.component';

describe('PageQuizComponent', () => {
  let component: PageQuizComponent;
  let fixture: ComponentFixture<PageQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DesignSystemModule,
      ],
      declarations: [ PageQuizComponent, QuestionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
