import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBreakDialogComponent } from './add-service-break-dialog.component';

describe('AddServiceBreakDialogComponent', () => {
  let component: AddServiceBreakDialogComponent;
  let fixture: ComponentFixture<AddServiceBreakDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBreakDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBreakDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
