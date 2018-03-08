import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPensionInfomationTblComponent } from './monthly-pension-infomation-tbl.component';

describe('MonthlyPensionInfomationTblComponent', () => {
  let component: MonthlyPensionInfomationTblComponent;
  let fixture: ComponentFixture<MonthlyPensionInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPensionInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPensionInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
