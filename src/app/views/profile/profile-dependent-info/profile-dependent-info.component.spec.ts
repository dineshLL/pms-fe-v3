import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDependentInfoComponent } from './profile-dependent-info.component';

describe('ProfileDependentInfoComponent', () => {
  let component: ProfileDependentInfoComponent;
  let fixture: ComponentFixture<ProfileDependentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDependentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDependentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
