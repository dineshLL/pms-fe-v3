import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WopReregServiceInformationComponent } from './wop-rereg-service-information.component';

describe('ServiceInformationComponent', () => {
  let component: WopReregServiceInformationComponent;
  let fixture: ComponentFixture<WopReregServiceInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WopReregServiceInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WopReregServiceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
