import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnffQuestionsComponent } from './grnff-questions.component';

describe('GrnffQuestionsComponent', () => {
  let component: GrnffQuestionsComponent;
  let fixture: ComponentFixture<GrnffQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnffQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnffQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
