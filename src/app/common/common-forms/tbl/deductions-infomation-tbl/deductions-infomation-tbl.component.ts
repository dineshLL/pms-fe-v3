import { DeductionsTableModel } from './../../../models/table-models/deductions-info.tbl.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deductions-infomation-tbl',
  templateUrl: './deductions-infomation-tbl.component.html',
  styleUrls: ['./deductions-infomation-tbl.component.scss']
})
export class DeductionsInfomationTblComponent implements OnInit {
  
  model: DeductionsTableModel;

  constructor() { }

  ngOnInit() {
    this.model = {} as DeductionsTableModel;
    this.model.deductions = [
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
    this.model.deductions.splice(row, 1);
  }

}