import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependentDialogComponent } from './add-dependent-dialog.component';

describe('AddDependentDialogComponent', () => {
  let component: AddDependentDialogComponent;
  let fixture: ComponentFixture<AddDependentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDependentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDependentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
