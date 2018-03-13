import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTempServiceDialogComponent } from './add-temp-service-dialog.component';

describe('AddTempServiceDialogComponent', () => {
  let component: AddTempServiceDialogComponent;
  let fixture: ComponentFixture<AddTempServiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTempServiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTempServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
