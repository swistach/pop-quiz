import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesignSystemModule } from 'projects/design-system/src/public-api';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StartBoxComponent } from 'src/app/boxes/start-box/start-box.component';

import { PageStartComponent } from './page-start.component';

describe('PageStartComponent', () => {
  let component: PageStartComponent;
  let fixture: ComponentFixture<PageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DesignSystemModule,
        AppRoutingModule,
      ],
      declarations: [ PageStartComponent, StartBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
