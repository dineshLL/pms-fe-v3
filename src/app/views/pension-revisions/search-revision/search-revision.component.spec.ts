import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRevisionComponent } from './search-revision.component';

describe('SearchRevisionComponent', () => {
  let component: SearchRevisionComponent;
  let fixture: ComponentFixture<SearchRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
