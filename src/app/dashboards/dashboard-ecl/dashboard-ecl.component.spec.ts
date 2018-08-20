
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEclComponent } from './dashboard-ecl.component';

describe('DashboardEclComponent', () => {
  let component: DashboardEclComponent;
  let fixture: ComponentFixture<DashboardEclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
