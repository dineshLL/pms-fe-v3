import { Router } from '@angular/router';
import { AdminService } from './../services/admin.service';
import { MainMenuItemAdminModel } from './../models/main-menu-items.admin.model';
import { ActionInfoModel } from './../../../common/models/dto-models/action-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-config-crud',
  templateUrl: './menu-config-crud.component.html',
  styleUrls: ['./menu-config-crud.component.scss']
})
export class MenuConfigCrudComponent implements OnInit {
  
  actions: ActionInfoModel[] = [
    {
      actionId: 1,
      actionType: 'VOID',
      displayText: 'New (Main Menu Item)'
    }
  ];

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getAllMenuConfigurations().subscribe(
      response => {

      }
    );
  }

  actionBtnClicked(action: ActionInfoModel) {
    alert(JSON.stringify(action));
  }

}
