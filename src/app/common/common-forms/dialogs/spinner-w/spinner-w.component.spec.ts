import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerWComponent } from './spinner-w.component';

describe('SpinnerWComponent', () => {
  let component: SpinnerWComponent;
  let fixture: ComponentFixture<SpinnerWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
