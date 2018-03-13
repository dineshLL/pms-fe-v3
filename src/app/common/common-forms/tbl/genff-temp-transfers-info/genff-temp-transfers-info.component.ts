import { TempTransfersTblModel } from './../../../models/table-models/temp-transfers-tbl.model';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AddTempServiceDialogComponent } from '../../dialogs/add-temp-service-dialog/add-temp-service-dialog.component';

@Component({
  selector: 'genff-temp-transfers-info',
  templateUrl: './genff-temp-transfers-info.component.html',
  styleUrls: ['./genff-temp-transfers-info.component.scss']
})
export class GenffTempTransfersInfoComponent implements OnInit {

  tblModel: TempTransfersTblModel = {} as TempTransfersTblModel;

  constructor(
    private dialogMgr: MatDialog
  ) {
    this.tblModel.rows = [];
  }

  ngOnInit() {

  }

  /**button action handlers */
  add() {
    this.dialogMgr
      .open(AddTempServiceDialogComponent, {
        width: '600px'
      })
      .afterClosed()
      .subscribe((response: FormGroup) => {
        if(response.valid) {
          this.tblModel.rows.push(response.value);
        }
      });
  }

  remove(item) {
    this.tblModel.rows.splice(item, 1);
  }

}

