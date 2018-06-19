import { MenuConfigCrudComponent } from './menu-config-crud/menu-config-crud.component';
import { SubMenuCrudComponent } from './sub-menu-crud/sub-menu-crud.component';
import { AdminService } from './services/admin.service';
import { MainMenuCrudComponent } from './main-menu-crud/main-menu-crud.component';
import { MenuconfigManagementPageComponent } from './menuconfig-management-page/menuconfig-management-page.component';
import { PmsAdminRoutingModule } from './pms-admin.routing.module';
import { CommonFormsModule } from './../../common/common-forms/common-forms.module';
import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageContainerComponent } from './page-container/page-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsModule } from '../../notifications/notifications.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';

@NgModule({
  imports: [
    CommonModule,
    PmsAdminRoutingModule,
    FlexLayoutModule,
    AngMatImporterModule,
    CommonFormsModule,
    NotificationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  declarations: [
    PageContainerComponent,
    UserManagementPageComponent,


    MenuconfigManagementPageComponent,
    MainMenuCrudComponent,
    SubMenuCrudComponent,
    MenuConfigCrudComponent
  ],
  providers: [
    AdminService
  ]
})
export class PmsAdminModule { }