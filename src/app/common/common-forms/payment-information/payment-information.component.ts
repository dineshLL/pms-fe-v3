import { ViewChild, ChangeDetectorRef } from "@angular/core";
import { MonthlyPensionInfomationTblComponent } from "./../tbl/monthly-pension-infomation-tbl/monthly-pension-infomation-tbl.component";
import { GratuityInfomationTblComponent } from "./../tbl/gratuity-infomation-tbl/gratuity-infomation-tbl.component";
import { PercentageInfomationTblComponent } from "./../tbl/percentage-infomation-tbl/percentage-infomation-tbl.component";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "common-payment-information",
  templateUrl: "./payment-information.component.html",
  styleUrls: ["./payment-information.component.scss"]
})
export class PaymentInformationComponent implements OnInit {
  form: FormGroup;

  @ViewChild(PercentageInfomationTblComponent)
  percentageComponent: PercentageInfomationTblComponent;
  @ViewChild(GratuityInfomationTblComponent)
  gratuityComponent: GratuityInfomationTblComponent;
  @ViewChild(MonthlyPensionInfomationTblComponent)
  pensionComponent: MonthlyPensionInfomationTblComponent;

  constructor(
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({});
  }

  ngAfterViewInit() {
    this.form.addControl('percentages', this.percentageComponent.form);
    this.form.addControl('gratuity', this.gratuityComponent.form);
    this.form.addControl('pension', this.pensionComponent.form);

    this.cdr.detectChanges();
  }
}
