import { SearchApplicationComponent } from './search-application/search-application.component';
import { PensionerTypeSelectorComponent } from './pensioner-type-selector/pensioner-type-selector.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageContainerComponent } from "./page-container/page-container.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReportsComponent } from "./reports/reports.component";
import { RegistrationFormContainerComponent } from "./registration-form-container/registration-form-container.component";
import { DeceasedPensionsRoutingModule } from "./deceased-pensions.routing.module";
import { AngMatImporterModule } from "../../ang-mat-importer/ang-mat-importer.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    DeceasedPensionsRoutingModule,
    AngMatImporterModule,
    FlexLayoutModule
  ],
  declarations: [
    PageContainerComponent,
    DashboardComponent,
    ReportsComponent,
    RegistrationFormContainerComponent,
    PensionerTypeSelectorComponent,
    SearchApplicationComponent
  ]
})
export class DeceasedPensionsModule {}
