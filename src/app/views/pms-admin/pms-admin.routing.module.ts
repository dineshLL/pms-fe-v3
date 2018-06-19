import { MenuConfigCrudComponent } from './menu-config-crud/menu-config-crud.component';
import { MainMenuCrudComponent } from './main-menu-crud/main-menu-crud.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { PageContainerComponent } from "./page-container/page-container.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuconfigManagementPageComponent } from './menuconfig-management-page/menuconfig-management-page.component';
import { SubMenuCrudComponent } from './sub-menu-crud/sub-menu-crud.component';

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    data: {
      title: "PMS System Administration"
    },
    children: [
      {
        path: "users-mgt",
        component: UserManagementPageComponent,
        data: {
          title: "Users Management"
        }
      },
      {
        path: "menu-mgt",
        component: MenuconfigManagementPageComponent,
        data: {
          title: "Menu Configurations"
        }
      },
      {
        path: 'menu-mgt/menu-config',
        component: MenuConfigCrudComponent,
        data: {
          title: "System naviation configuration"
        }
      },
      {
        path: 'menu-mgt/menu',
        component: MainMenuCrudComponent,
        data: {
          title: "Main menu management"
        }
      },
      {
        path: 'menu-mgt/menu/:menuId/submenu',
        component: SubMenuCrudComponent,
        data: {
          title: "Sub menu management"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmsAdminRoutingModule {}
