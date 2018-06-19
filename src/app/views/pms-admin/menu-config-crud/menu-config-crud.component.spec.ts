import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConfigCrudComponent } from './menu-config-crud.component';

describe('MenuConfigCrudComponent', () => {
  let component: MenuConfigCrudComponent;
  let fixture: ComponentFixture<MenuConfigCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConfigCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConfigCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
