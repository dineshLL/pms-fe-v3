import { AdminService } from './../services/admin.service';
import { MainMenuItemAdminModel } from './../models/main-menu-items.admin.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SubMenuItemAdminModel } from '../models/sub-menu-item.admin.model';

@Component({
  selector: 'app-sub-menu-crud',
  templateUrl: './sub-menu-crud.component.html',
  styleUrls: ['./sub-menu-crud.component.scss']
})
export class SubMenuCrudComponent implements OnInit, OnDestroy{

  private routeSubscription: Subscription;
  private serviceSub: Subscription;

  mainMenu: MainMenuItemAdminModel;
  subMenuItems: SubMenuItemAdminModel[];

  constructor(
    private route: ActivatedRoute,
    private service: AdminService
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(
      (params: MainMenuItemAdminModel) => {
        this.mainMenu = params;
        this.serviceSub = this.service.getAllSubMenuItems(this.mainMenu.menuItemId).subscribe(
          response => {
            this.subMenuItems = response;
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.serviceSub.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
 