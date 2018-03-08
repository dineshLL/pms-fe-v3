import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopayInfomationTblComponent } from './nopay-infomation-tbl.component';

describe('NopayInfomationTblComponent', () => {
  let component: NopayInfomationTblComponent;
  let fixture: ComponentFixture<NopayInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopayInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopayInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
