import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForBookingComponent } from './search-for-booking.component';

describe('SearchForBookingComponent', () => {
  let component: SearchForBookingComponent;
  let fixture: ComponentFixture<SearchForBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
