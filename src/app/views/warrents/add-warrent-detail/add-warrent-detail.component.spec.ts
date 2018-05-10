import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarrentDetailComponent } from './add-warrent-detail.component';

describe('AddWarrentDetailComponent', () => {
  let component: AddWarrentDetailComponent;
  let fixture: ComponentFixture<AddWarrentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWarrentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWarrentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
