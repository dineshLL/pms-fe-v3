import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsInformationComponent } from './dependents-information.component';

describe('DependentsInformationComponent', () => {
  let component: DependentsInformationComponent;
  let fixture: ComponentFixture<DependentsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
