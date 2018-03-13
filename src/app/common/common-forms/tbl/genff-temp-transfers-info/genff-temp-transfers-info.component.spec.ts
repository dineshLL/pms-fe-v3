import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenffTempTransfersInfoComponent } from './genff-temp-transfers-info.component';

describe('GenffTempTransfersInfoComponent', () => {
  let component: GenffTempTransfersInfoComponent;
  let fixture: ComponentFixture<GenffTempTransfersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenffTempTransfersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenffTempTransfersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
