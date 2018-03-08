import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionsInfomationTblComponent } from './deductions-infomation-tbl.component';

describe('DeductionsInfomationTblComponent', () => {
  let component: DeductionsInfomationTblComponent;
  let fixture: ComponentFixture<DeductionsInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductionsInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionsInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
