import { CommonFormsModule } from './../../common/common-forms/common-forms.module';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { RegistrationSuccessfulComponent } from './registration-successful/registration-successful.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PensionerTypeSelectorComponent } from './pensioner-type-selector/pensioner-type-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReportsComponent } from './reports/reports.component';
import { RegularPensionsRoutingModule } from './regular-pensions.routing.module';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RegularPensionsRoutingModule,
    FlexLayoutModule,
    AngMatImporterModule,
    CommonFormsModule
  ],
  declarations: [
    PageContainerComponent,
    DashboardComponent,
    ReportsComponent,
    ReportsComponent,
    RegistrationFormContainerComponent,

    // better if lazy loaded
    PensionerTypeSelectorComponent,
    RegistrationFormComponent,
    RegistrationSuccessfulComponent,
  ]
})
export class RegularPensionsModule { }
