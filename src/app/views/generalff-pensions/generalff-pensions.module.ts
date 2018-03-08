import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { Gen55RoutingModule } from './generalff-pensions.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReportsComponent } from './reports/reports.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    Gen55RoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    PageContainerComponent,
    RegistrationFormContainerComponent,
    ReportsComponent,
    DashboardComponent
  ]
})
export class GeneralffPensionsModule { }
