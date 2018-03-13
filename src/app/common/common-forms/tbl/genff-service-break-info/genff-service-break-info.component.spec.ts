import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenffServiceBreakInfoComponent } from './genff-service-break-info.component';

describe('GenffServiceBreakInfoComponent', () => {
  let component: GenffServiceBreakInfoComponent;
  let fixture: ComponentFixture<GenffServiceBreakInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenffServiceBreakInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenffServiceBreakInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
