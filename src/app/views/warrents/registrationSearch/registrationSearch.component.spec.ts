import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { registrationSearchComponent } from './registrationSearch.component';

describe('SearchForRegistrationComponent', () => {
  let component: registrationSearchComponent;
  let fixture: ComponentFixture<registrationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ registrationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(registrationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
