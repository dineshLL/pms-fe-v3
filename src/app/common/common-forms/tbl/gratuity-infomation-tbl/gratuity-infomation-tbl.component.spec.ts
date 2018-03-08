import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuityInfomationTblComponent } from './gratuity-infomation-tbl.component';

describe('GratuityInfomationTblComponent', () => {
  let component: GratuityInfomationTblComponent;
  let fixture: ComponentFixture<GratuityInfomationTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratuityInfomationTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuityInfomationTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
