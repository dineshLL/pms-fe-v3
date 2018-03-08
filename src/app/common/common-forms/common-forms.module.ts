import { SalaryInfomationTblComponent } from './tbl/salary-infomation-tbl/salary-infomation-tbl.component';
import { AngMatImporterModule } from "./../../ang-mat-importer/ang-mat-importer.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonalInfomationComponent } from "./personal-infomation/personal-infomation.component";
import { ServiceInformationComponent } from "./service-information/service-information.component";
import { DependentsInformationComponent } from "./dependents-information/dependents-information.component";
import { BankInformationComponent } from "./bank-information/bank-information.component";
import { PensionableInformationComponent } from "./pensionable-information/pensionable-information.component";
import { PaymentInformationComponent } from "./payment-information/payment-information.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GrossSalaryInfomationTblComponent } from "./tbl/gross-salary-infomation-tbl/gross-salary-infomation-tbl.component";
import { ServicePeriodTblComponent } from "./tbl/service-period-tbl/service-period-tbl.component";
import { NopayInfomationTblComponent } from "./tbl/nopay-infomation-tbl/nopay-infomation-tbl.component";
import { AllowancesInfomationTblComponent } from './tbl/allowances-infomation-tbl/allowances-infomation-tbl.component';
import { PercentageInfomationTblComponent } from './tbl/percentage-infomation-tbl/percentage-infomation-tbl.component';
import { DeductionsInfomationTblComponent } from './tbl/deductions-infomation-tbl/deductions-infomation-tbl.component';
import { GratuityInfomationTblComponent } from './tbl/gratuity-infomation-tbl/gratuity-infomation-tbl.component';
import { MonthlyPensionInfomationTblComponent } from './tbl/monthly-pension-infomation-tbl/monthly-pension-infomation-tbl.component';

let exportedComponents = [
  PersonalInfomationComponent,
  ServiceInformationComponent,
  DependentsInformationComponent,
  BankInformationComponent,
  PensionableInformationComponent,
  PaymentInformationComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngMatImporterModule
  ],
  declarations: [
    GrossSalaryInfomationTblComponent,
    ServicePeriodTblComponent,
    NopayInfomationTblComponent,
    SalaryInfomationTblComponent,
    ...exportedComponents,
    AllowancesInfomationTblComponent,
    PercentageInfomationTblComponent,
    DeductionsInfomationTblComponent,
    GratuityInfomationTblComponent,
    MonthlyPensionInfomationTblComponent
  ],
  exports: exportedComponents
})
export class CommonFormsModule {}
