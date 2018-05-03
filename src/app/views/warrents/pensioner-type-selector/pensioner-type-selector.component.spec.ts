import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerTypeSelectorComponent } from './pensioner-type-selector.component';

describe('PensionerTypeSelectorComponent', () => {
  let component: PensionerTypeSelectorComponent;
  let fixture: ComponentFixture<PensionerTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionerTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
