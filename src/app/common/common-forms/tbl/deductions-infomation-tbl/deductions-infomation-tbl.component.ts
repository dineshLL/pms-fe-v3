import { AddDeductionDialogComponent } from './../../dialogs/add-deduction-dialog/add-deduction-dialog.component';
import { MatDialog } from '@angular/material';
import { DeductionsTableModel } from './../../../models/table-models/deductions-info.tbl.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deductions-infomation-tbl',
  templateUrl: './deductions-infomation-tbl.component.html',
  styleUrls: ['./deductions-infomation-tbl.component.scss']
})
export class DeductionsInfomationTblComponent implements OnInit {
  
  model: DeductionsTableModel;

  constructor(
    private dialogMgr: MatDialog
  ) { }

  ngOnInit() {
    this.model = {} as DeductionsTableModel;
    this.model.deductions = [];
  }

  /**button click action handlers */
  remove(row) {
    this.model.deductions.splice(row, 1);
  }

  add() {
    this.dialogMgr
      .open(AddDeductionDialogComponent, {
        width: '600px'
      })
      .afterClosed()
      .subscribe(response => {
        this.model.deductions.push(response);
      });
  }

}