import { NotificationsModule } from './../../notifications/notifications.module';
import { ExtraInformationComponent } from './extra-information/extra-information.component';
import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { CommonFormsModule } from './../../common/common-forms/common-forms.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { Gen55RoutingModule } from './generalff-pensions.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReportsComponent } from './reports/reports.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrationSuccessfulComponent } from './registration-successful/registration-successful.component';
import { SearchApplicationComponent } from './search-application/search-application.component';

@NgModule({
  imports: [
    CommonModule,
    Gen55RoutingModule,
    FlexLayoutModule,
    CommonFormsModule,
    AngMatImporterModule,
    NotificationsModule
  ],
  declarations: [
    PageContainerComponent,
    RegistrationFormContainerComponent,
    ReportsComponent,
    DashboardComponent,
    ExtraInformationComponent,
    RegistrationSuccessfulComponent,
    SearchApplicationComponent
  ]
})
export class GeneralffPensionsModule { }
