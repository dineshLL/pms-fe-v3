import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnffCalculationsComponent } from './grnff-calculations.component';

describe('GrnffCalculationsComponent', () => {
  let component: GrnffCalculationsComponent;
  let fixture: ComponentFixture<GrnffCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnffCalculationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnffCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
