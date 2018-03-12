import { Component, OnInit } from '@angular/core';
import { AllowanceTableModel } from '../../../models/table-models/allowance-info.tbl.model';

@Component({
  selector: 'app-allowances-infomation-tbl',
  templateUrl: './allowances-infomation-tbl.component.html',
  styleUrls: ['./allowances-infomation-tbl.component.scss']
})
export class AllowancesInfomationTblComponent implements OnInit {

  model: AllowanceTableModel;

  constructor() { }

  ngOnInit() {
    this.model = {} as AllowanceTableModel;
    this.model.allowances = [
      {
        code: 1,
        title: 'this is a test tile',
        amount: 100,
        amountFor2020: 110
      }
    ];
  }

  /**button click action handlers */
  remove(row) {
    this.model.allowances.splice(row, 1);
  }

}
