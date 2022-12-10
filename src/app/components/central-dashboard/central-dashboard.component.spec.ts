import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralDashboardComponent } from './central-dashboard.component';

describe('CentralDashboardComponent', () => {
  let component: CentralDashboardComponent;
  let fixture: ComponentFixture<CentralDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
