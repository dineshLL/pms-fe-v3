import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeductionDialogComponent } from './add-deduction-dialog.component';

describe('AddDeductionDialogComponent', () => {
  let component: AddDeductionDialogComponent;
  let fixture: ComponentFixture<AddDeductionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeductionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeductionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
