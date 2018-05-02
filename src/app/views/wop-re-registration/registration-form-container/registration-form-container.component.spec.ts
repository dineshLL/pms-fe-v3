import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormContainerComponent } from './registration-form-container.component';

describe('RegistrationFormContainerComponent', () => {
  let component: RegistrationFormContainerComponent;
  let fixture: ComponentFixture<RegistrationFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
