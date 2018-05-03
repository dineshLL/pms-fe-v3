import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForRegistrationComponent } from './search-for-registration.component';

describe('SearchForRegistrationComponent', () => {
  let component: SearchForRegistrationComponent;
  let fixture: ComponentFixture<SearchForRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
