import { Router } from '@angular/router';
import { MainMenuItemAdminModel } from './../models/main-menu-items.admin.model';
import { AdminService } from './../services/admin.service';
import { ActionInfoModel } from './../../../common/models/dto-models/action-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-crud',
  templateUrl: './main-menu-crud.component.html',
  styleUrls: ['./main-menu-crud.component.scss']
})
export class MainMenuCrudComponent implements OnInit {

  actions: ActionInfoModel[] = [
    {
      actionId: 1,
      actionType: 'VOID',
      displayText: 'New (Main Menu Item)'
    }
  ];

  mainMenu: MainMenuItemAdminModel[];

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getAllMainMenuItems().subscribe(
      response => {
        this.mainMenu = response;
      }
    );
  }

  actionBtnClicked(action: ActionInfoModel) {
    alert(JSON.stringify(action));
  }

  updateBtnClicked(item: MainMenuItemAdminModel) {
    alert(item);
  }

  showSubMenuItemsBtnClicked(model: MainMenuItemAdminModel) {
    this.service.getAllSubMenuItems(model.menuItemId).subscribe(
      response => {
        this.router.navigate(
          ['/admin/menu-mgt/menu', model.menuItemId, 'submenu'],
        { queryParams: model }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
