import { AngMatImporterModule } from './../../ang-mat-importer/ang-mat-importer.module';
import { SearchRevisionComponent } from './search-revision/search-revision.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevisionsRoutingModule } from './pension-revisions.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReportsComponent } from './reports/reports.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RevisionsRoutingModule,
    AngMatImporterModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent,
    PageContainerComponent,
    RegistrationFormContainerComponent,
    ReportsComponent,
    SearchRevisionComponent
  ]
})
export class PensionRevisionsModule { }
