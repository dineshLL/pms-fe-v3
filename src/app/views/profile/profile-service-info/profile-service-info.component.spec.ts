import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileServiceInfoComponent } from './profile-service-info.component';

describe('ProfileServiceInfoComponent', () => {
  let component: ProfileServiceInfoComponent;
  let fixture: ComponentFixture<ProfileServiceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileServiceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
