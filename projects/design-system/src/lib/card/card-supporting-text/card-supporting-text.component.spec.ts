import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSupportingTextComponent } from './card-supporting-text.component';

describe('CardSupportingTextComponent', () => {
  let component: CardSupportingTextComponent;
  let fixture: ComponentFixture<CardSupportingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSupportingTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSupportingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
