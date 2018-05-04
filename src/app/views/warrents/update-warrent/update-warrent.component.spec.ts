import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWarrentComponent } from './update-warrent.component';

describe('UpdateWarrentComponent', () => {
  let component: UpdateWarrentComponent;
  let fixture: ComponentFixture<UpdateWarrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWarrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWarrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
