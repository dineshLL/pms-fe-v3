import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentBookingComponent } from './warrent-booking.component';

describe('WarrentBookingComponent', () => {
  let component: WarrentBookingComponent;
  let fixture: ComponentFixture<WarrentBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrentBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
