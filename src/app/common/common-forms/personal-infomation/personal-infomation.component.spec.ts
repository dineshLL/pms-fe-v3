import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfomationComponent } from './personal-infomation.component';

describe('PersonalInfomationComponent', () => {
  let component: PersonalInfomationComponent;
  let fixture: ComponentFixture<PersonalInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
