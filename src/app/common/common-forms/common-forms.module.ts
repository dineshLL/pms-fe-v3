import { FlexLayoutModule } from "@angular/flex-layout";
import { SalaryInfomationTblComponent } from "./tbl/salary-infomation-tbl/salary-infomation-tbl.component";
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
import { AllowancesInfomationTblComponent } from "./tbl/allowances-infomation-tbl/allowances-infomation-tbl.component";
import { PercentageInfomationTblComponent } from "./tbl/percentage-infomation-tbl/percentage-infomation-tbl.component";
import { DeductionsInfomationTblComponent } from "./tbl/deductions-infomation-tbl/deductions-infomation-tbl.component";
import { GratuityInfomationTblComponent } from "./tbl/gratuity-infomation-tbl/gratuity-infomation-tbl.component";
import { MonthlyPensionInfomationTblComponent } from "./tbl/monthly-pension-infomation-tbl/monthly-pension-infomation-tbl.component";
import { GrnffQuestionsComponent } from "./grnff-questions/grnff-questions.component";
import { GrnffCalculationsComponent } from "./grnff-calculations/grnff-calculations.component";
import { JudicialPreFormDialogComponent } from "./dialogs/judicial-pre-form-dialog/judicial-pre-form-dialog.component";
import { MilitoryPreFormDialogComponent } from "./dialogs/militory-pre-form-dialog/militory-pre-form-dialog.component";
import { AddDependentDialogComponent } from "./dialogs/add-dependent-dialog/add-dependent-dialog.component";
import { AddAllowanceDialogComponent } from "./dialogs/add-allowance-dialog/add-allowance-dialog.component";
import { AddDeductionDialogComponent } from "./dialogs/add-deduction-dialog/add-deduction-dialog.component";
import { GenffServiceBreakInfoComponent } from "./tbl/genff-service-break-info/genff-service-break-info.component";
import { GenffTempTransfersInfoComponent } from "./tbl/genff-temp-transfers-info/genff-temp-transfers-info.component";
import { AddServiceBreakDialogComponent } from "./dialogs/add-service-break-dialog/add-service-break-dialog.component";
import { AddTempServiceDialogComponent } from "./dialogs/add-temp-service-dialog/add-temp-service-dialog.component";

let exportedComponents = [
  PersonalInfomationComponent,
  ServiceInformationComponent,
  DependentsInformationComponent,
  BankInformationComponent,
  PensionableInformationComponent,
  PaymentInformationComponent,
  GrnffCalculationsComponent,
  GrnffQuestionsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngMatImporterModule,
    FlexLayoutModule
  ],
  declarations: [
    GrossSalaryInfomationTblComponent,
    ServicePeriodTblComponent,
    NopayInfomationTblComponent,
    SalaryInfomationTblComponent,
    AllowancesInfomationTblComponent,
    PercentageInfomationTblComponent,
    DeductionsInfomationTblComponent,
    GratuityInfomationTblComponent,
    MonthlyPensionInfomationTblComponent,
    GrnffQuestionsComponent,
    GrnffCalculationsComponent,
    JudicialPreFormDialogComponent,
    MilitoryPreFormDialogComponent,
    AddDependentDialogComponent,
    AddAllowanceDialogComponent,
    AddDeductionDialogComponent,
    GenffServiceBreakInfoComponent,
    GenffTempTransfersInfoComponent,
    AddServiceBreakDialogComponent,
    AddTempServiceDialogComponent,
    ...exportedComponents
  ],
  exports: exportedComponents,
  entryComponents: [
    JudicialPreFormDialogComponent,
    MilitoryPreFormDialogComponent,
    AddDependentDialogComponent,
    AddAllowanceDialogComponent,
    AddDeductionDialogComponent,
    AddTempServiceDialogComponent,
    AddServiceBreakDialogComponent
  ]
})
export class CommonFormsModule {}
