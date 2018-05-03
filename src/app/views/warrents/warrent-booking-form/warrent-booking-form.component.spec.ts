import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentBookingFormComponent } from './warrent-booking-form.component';

describe('WarrentBookingFormComponent', () => {
  let component: WarrentBookingFormComponent;
  let fixture: ComponentFixture<WarrentBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrentBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrentBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
