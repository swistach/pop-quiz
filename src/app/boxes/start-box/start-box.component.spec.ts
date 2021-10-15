import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesignSystemModule } from 'projects/design-system/src/public-api';

import { StartBoxComponent } from './start-box.component';

describe('StartBoxComponent', () => {
  let component: StartBoxComponent;
  let fixture: ComponentFixture<StartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DesignSystemModule,
      ],
      declarations: [ StartBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
