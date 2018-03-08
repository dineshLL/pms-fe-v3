import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryInfomationTblComponent } from './salary-infomation-tbl.component';

describe('SalaryInfomationTblComponent', () => {
  let component: SalaryInfomationTblComponent;
  let fixture: ComponentFixture<SalaryInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
