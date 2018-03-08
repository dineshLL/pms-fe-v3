import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSalaryInfoComponent } from './profile-salary-info.component';

describe('ProfileSalaryInfoComponent', () => {
  let component: ProfileSalaryInfoComponent;
  let fixture: ComponentFixture<ProfileSalaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSalaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSalaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
