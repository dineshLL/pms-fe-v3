import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossSalaryInfomationTblComponent } from './gross-salary-infomation-tbl.component';

describe('GrossSalaryInfomationTblComponent', () => {
  let component: GrossSalaryInfomationTblComponent;
  let fixture: ComponentFixture<GrossSalaryInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossSalaryInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossSalaryInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
