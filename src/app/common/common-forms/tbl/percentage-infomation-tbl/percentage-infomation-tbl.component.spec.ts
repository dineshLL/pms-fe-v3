import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageInfomationTblComponent } from './percentage-infomation-tbl.component';

describe('PercentageInfomationTblComponent', () => {
  let component: PercentageInfomationTblComponent;
  let fixture: ComponentFixture<PercentageInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
