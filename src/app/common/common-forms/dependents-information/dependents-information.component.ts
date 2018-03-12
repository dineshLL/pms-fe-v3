import { AddDependentDialogComponent } from "./../dialogs/add-dependent-dialog/add-dependent-dialog.component";
import { MatDialog } from "@angular/material";
import { DependentsInfoTblModel } from "./../../models/table-models/dependents-info.tbl.model";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "common-dependents-information",
  templateUrl: "./dependents-information.component.html",
  styleUrls: ["./dependents-information.component.scss"]
})
export class DependentsInformationComponent implements OnInit {
  DIALOG_WIDTH = "600px";
  form: FormGroup;
  dependents: DependentsInfoTblModel[] = [];

  constructor(private dialogMgr: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      maritalStatus: ['Married', Validators.required],
      wnopRefundStatus: ['', Validators.required]
    });
  }

  get maritalStatus() {
    return this.form.get("maritalStatus");
  }

  /**button action handlers */
  addDependent() {
    this.dialogMgr
      .open(AddDependentDialogComponent, {
        width: this.DIALOG_WIDTH
      })
      .afterClosed()
      .subscribe(response => {
        this.dependents.push(response);
      });
  }

  remove(row) {
    this.dependents.splice(row, 1);
  }
}
