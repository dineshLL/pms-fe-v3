import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialPreFormDialogComponent } from './judicial-pre-form-dialog.component';

describe('JudicialPreFormDialogComponent', () => {
  let component: JudicialPreFormDialogComponent;
  let fixture: ComponentFixture<JudicialPreFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudicialPreFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicialPreFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
