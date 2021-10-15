import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesignSystemModule } from 'projects/design-system/src/public-api';
import { SummaryBoxComponent } from 'src/app/boxes/summary-box/summary-box.component';

import { PageSummaryComponent } from './page-summary.component';

describe('PageSummaryComponent', () => {
  let component: PageSummaryComponent;
  let fixture: ComponentFixture<PageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DesignSystemModule,
      ],
      declarations: [ PageSummaryComponent, SummaryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
