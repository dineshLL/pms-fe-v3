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

@NgModule({
  imports: [
    CommonModule,
    WnopReregRoutingModule,
    FlexLayoutModule,
    AngMatImporterModule,
    CommonFormsModule
  ],
  declarations: [
    DashboardComponent,
    PageContainerComponent,
    ReportsComponent,
    RegistrationFormContainerComponent
  ]
})
export class WnopReregModule { }
