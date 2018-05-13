import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { CommonFormsModule } from './../../common/common-forms/common-forms.module';
import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageContainerComponent } from './page-container/page-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { WnopReregRoutingModule } from './wnop-rereg.routing.module';
import { NotificationsModule } from '../../notifications/notifications.module';
import { ServiceInfoComponent } from './forms/service-info/service-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    WnopReregRoutingModule,
    FlexLayoutModule,
    AngMatImporterModule,
    CommonFormsModule,
    NotificationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    PageContainerComponent,
    ReportsComponent,
    RegistrationFormContainerComponent,
    ServiceInfoComponent
  ]
})
export class WnopReregModule { }