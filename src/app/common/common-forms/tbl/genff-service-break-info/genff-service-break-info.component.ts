import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'genff-service-break-info',
  templateUrl: './genff-service-break-info.component.html',
  styleUrls: ['./genff-service-break-info.component.scss']
})
export class GenffServiceBreakInfoComponent implements OnInit {

  tblModel: Model[] = [];

  constructor() { }

  ngOnInit() {

  }

  /**button action handlers */
  add() {
    this.tblModel.push({
      from: new Date().toDateString(),
      to: new Date().toDateString(),
      reason: 'test reason',
      paymentStatus: 'Paid'
    });
  }

  remove(item) {
    this.tblModel.splice(item, 1);
  }

}

interface Model {
  from: string;
  to: string;
  reason: string;
  paymentStatus: string;
}