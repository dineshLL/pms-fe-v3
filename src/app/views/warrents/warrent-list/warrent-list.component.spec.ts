import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentListComponent } from './warrent-list.component';

describe('WarrentListComponent', () => {
  let component: WarrentListComponent;
  let fixture: ComponentFixture<WarrentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
