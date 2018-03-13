import { ServiceBreakInfoTblModel } from './../../../models/table-models/service-break.tbl.model';
import { routes } from './../../../../app.routing';
import { AddServiceBreakDialogComponent } from './../../dialogs/add-service-break-dialog/add-service-break-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'genff-service-break-info',
  templateUrl: './genff-service-break-info.component.html',
  styleUrls: ['./genff-service-break-info.component.scss']
})
export class GenffServiceBreakInfoComponent implements OnInit {

  tblModel: ServiceBreakInfoTblModel;

  constructor(
    private dialogMgr: MatDialog
  ) {
    this.tblModel = {} as ServiceBreakInfoTblModel;
    this.tblModel.rows = [];
  }

  ngOnInit() {

  }

  /**button action handlers */
  add() {
    this.dialogMgr
      .open(AddServiceBreakDialogComponent, {
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