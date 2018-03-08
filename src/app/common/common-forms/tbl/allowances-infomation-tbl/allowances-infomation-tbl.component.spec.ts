import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancesInfomationTblComponent } from './allowances-infomation-tbl.component';

describe('AllowancesInfomationTblComponent', () => {
  let component: AllowancesInfomationTblComponent;
  let fixture: ComponentFixture<AllowancesInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowancesInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowancesInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
