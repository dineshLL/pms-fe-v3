import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuconfigManagementPageComponent } from './menuconfig-management-page.component';

describe('MenuconfigManagementPageComponent', () => {
  let component: MenuconfigManagementPageComponent;
  let fixture: ComponentFixture<MenuconfigManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuconfigManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuconfigManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
