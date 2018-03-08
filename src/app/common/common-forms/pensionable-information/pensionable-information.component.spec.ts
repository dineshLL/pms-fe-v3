import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionableInformationComponent } from './pensionable-information.component';

describe('PensionableInformationComponent', () => {
  let component: PensionableInformationComponent;
  let fixture: ComponentFixture<PensionableInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionableInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionableInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
