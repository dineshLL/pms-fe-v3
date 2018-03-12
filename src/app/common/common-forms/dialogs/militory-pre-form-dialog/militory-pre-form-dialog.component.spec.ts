import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitoryPreFormDialogComponent } from './militory-pre-form-dialog.component';

describe('MilitoryPreFormDialogComponent', () => {
  let component: MilitoryPreFormDialogComponent;
  let fixture: ComponentFixture<MilitoryPreFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitoryPreFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitoryPreFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
