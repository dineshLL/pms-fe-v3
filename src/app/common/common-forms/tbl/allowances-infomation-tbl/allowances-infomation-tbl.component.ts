import { FormGroup } from "@angular/forms";
import { AddAllowanceDialogComponent } from "./../../dialogs/add-allowance-dialog/add-allowance-dialog.component";
import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { AllowanceTableModel } from "../../../models/table-models/allowance-info.tbl.model";

@Component({
  selector: "app-allowances-infomation-tbl",
  templateUrl: "./allowances-infomation-tbl.component.html",
  styleUrls: ["./allowances-infomation-tbl.component.scss"]
})
export class AllowancesInfomationTblComponent implements OnInit {
  model: AllowanceTableModel;

  constructor(private dialogMgr: MatDialog) {}

  ngOnInit() {
    this.model = {} as AllowanceTableModel;
    this.model.allowances = [];
  }

  /**button click action handlers */
  remove(row) {
    this.model.allowances.splice(row, 1);
  }

  /**button click handlers */
  addAllowance() {
    this.dialogMgr
      .open(AddAllowanceDialogComponent, {
        width: "600px"
      })
      .afterClosed()
      .subscribe((response: FormGroup) => {
        if (response.valid) this.model.allowances.push(response.value);
      });
  }
}
