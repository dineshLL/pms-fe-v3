import { CommonFormsModule } from './../../common/common-forms/common-forms.module';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { RegistrationSuccessfulComponent } from './registration-successful/registration-successful.component';
// import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PensionerTypeSelectorComponent } from './pensioner-type-selector/pensioner-type-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReportsComponent } from './reports/reports.component';
import { WopRegistrationRoutingModule } from './wop-re-registration.routing.module';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WopReregServiceInformationComponent } from './forms/wop-rereg-service-information/wop-rereg-service-information.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    WopRegistrationRoutingModule,
    FlexLayoutModule,
    AngMatImporterModule,
    CommonFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    PageContainerComponent,
    DashboardComponent,
    ReportsComponent,
    ReportsComponent,
    RegistrationFormContainerComponent,
    WopReregServiceInformationComponent,

    // better if lazy loaded
    PensionerTypeSelectorComponent,
    RegistrationSuccessfulComponent,
  ]
})
export class WopReregistrationModule { }
