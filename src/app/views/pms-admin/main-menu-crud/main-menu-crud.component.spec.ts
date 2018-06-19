import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuCrudComponent } from './main-menu-crud.component';

describe('MainMenuCrudComponent', () => {
  let component: MainMenuCrudComponent;
  let fixture: ComponentFixture<MainMenuCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
