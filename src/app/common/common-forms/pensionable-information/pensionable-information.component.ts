import { AddAllowanceDialogComponent } from './../dialogs/add-allowance-dialog/add-allowance-dialog.component';
import { MatDialog } from "@angular/material";
import { GrossSalaryInfomationTblComponent } from "./../tbl/gross-salary-infomation-tbl/gross-salary-infomation-tbl.component";
import { SalaryInfomationTblComponent } from "./../tbl/salary-infomation-tbl/salary-infomation-tbl.component";
import { ServicePeriodTblComponent } from "./../tbl/service-period-tbl/service-period-tbl.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "common-pensionable-information",
  templateUrl: "./pensionable-information.component.html",
  styleUrls: ["./pensionable-information.component.scss"]
})
export class PensionableInformationComponent implements OnInit {
  form: FormGroup;
  DIALOG_WIDTH = '600px';

  @ViewChild(ServicePeriodTblComponent) serviceTable: ServicePeriodTblComponent;
  @ViewChild(SalaryInfomationTblComponent)
  salaryTable: SalaryInfomationTblComponent;
  @ViewChild(GrossSalaryInfomationTblComponent)
  grossSalaryTable: GrossSalaryInfomationTblComponent;

  constructor(private dialogMgr: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      salaryCode: ['', Validators.required],
      lastDateOfIncrement: ['', Validators.required],
      monthlySalary: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(console.log);
  }

  ngAfterViewInit() {
    this.form.addControl("service", this.serviceTable.form);
    this.form.addControl("salary", this.salaryTable.form);
    this.form.addControl("grossSalary", this.grossSalaryTable.form);
  }

  /**button click handlers */
  addAllowance() {
    this.dialogMgr
      .open(AddAllowanceDialogComponent, {
        width: this.DIALOG_WIDTH
      })
      .afterClosed()
      .subscribe(response => {
        alert(JSON.stringify(response));
      });
  }
}
