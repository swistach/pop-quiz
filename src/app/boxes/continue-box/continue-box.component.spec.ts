import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueBoxComponent } from './continue-box.component';

describe('ContinueBoxComponent', () => {
  let component: ContinueBoxComponent;
  let fixture: ComponentFixture<ContinueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
