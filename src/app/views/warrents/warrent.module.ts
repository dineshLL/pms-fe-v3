import { CommonFormsModule } from './../../common/common-forms/common-forms.module';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { RegistrationSuccessfulComponent } from './registration-successful/registration-successful.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PensionerTypeSelectorComponent } from './pensioner-type-selector/pensioner-type-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchForBookingComponent } from './../warrents/search-for-booking/search-for-booking.component';
import { WarrentBookingFormComponent } from './../warrents/warrent-booking-form/warrent-booking-form.component'; 
import { WarrentBookingComponent } from './../warrents/warrent-booking/warrent-booking.component'; 
import { WarrentDetailsComponent } from './../warrents/warrent-details/warrent-details.component'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReportsComponent } from './reports/reports.component';
import { WarrantsRoutingModule } from './warrents.routing.module';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchForRegistrationComponent } from './registration-form-container/search-for-registration/search-for-registration.component';
import { PensionerListComponent } from './registration-form-container/pensioner-list/pensioner-list.component';
import { AddWarrentDetailComponent } from './registration-form-container/add-warrent-detail/add-warrent-detail.component';
import { AddDependentsComponent } from './registration-form-container/add-dependents/add-dependents.component';
import { SearchWarrentComponent } from './search-warrent/search-warrent.component';
import { WarrentListComponent } from './warrent-list/warrent-list.component';


@NgModule({
  imports: [
    CommonModule,
    WarrantsRoutingModule,
    FlexLayoutModule,
    AngMatImporterModule,
    CommonFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PageContainerComponent,
    DashboardComponent,
    ReportsComponent,
    ReportsComponent,
    RegistrationFormContainerComponent,
    SearchForBookingComponent,
    WarrentBookingFormComponent, 
    WarrentDetailsComponent,
    WarrentBookingComponent,
    SearchForRegistrationComponent,
    PensionerListComponent,
    AddWarrentDetailComponent,
    AddDependentsComponent,     
    SearchWarrentComponent,
    WarrentListComponent,

    // better if lazy loaded
    PensionerTypeSelectorComponent,
    RegistrationFormComponent,
    RegistrationSuccessfulComponent,
  ],
  entryComponents:[
    AddDependentsComponent
  ]
})
export class WarrentsModule { }
