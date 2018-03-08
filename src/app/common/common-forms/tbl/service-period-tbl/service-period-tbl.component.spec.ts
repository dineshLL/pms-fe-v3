import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePeriodTblComponent } from './service-period-tbl.component';

describe('ServicePeriodTblComponent', () => {
  let component: ServicePeriodTblComponent;
  let fixture: ComponentFixture<ServicePeriodTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePeriodTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePeriodTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
