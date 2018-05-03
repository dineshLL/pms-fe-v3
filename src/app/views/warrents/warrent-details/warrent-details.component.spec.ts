import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentDetailsComponent } from './warrent-details.component';

describe('WarrentDetailsComponent', () => {
  let component: WarrentDetailsComponent;
  let fixture: ComponentFixture<WarrentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
