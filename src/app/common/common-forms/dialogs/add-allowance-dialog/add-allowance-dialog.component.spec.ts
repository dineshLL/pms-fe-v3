import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllowanceDialogComponent } from './add-allowance-dialog.component';

describe('AddAllowanceDialogComponent', () => {
  let component: AddAllowanceDialogComponent;
  let fixture: ComponentFixture<AddAllowanceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAllowanceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllowanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
