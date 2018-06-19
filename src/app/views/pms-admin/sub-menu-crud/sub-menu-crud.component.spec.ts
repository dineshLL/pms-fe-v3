import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuCrudComponent } from './sub-menu-crud.component';

describe('SubMenuCrudComponent', () => {
  let component: SubMenuCrudComponent;
  let fixture: ComponentFixture<SubMenuCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
