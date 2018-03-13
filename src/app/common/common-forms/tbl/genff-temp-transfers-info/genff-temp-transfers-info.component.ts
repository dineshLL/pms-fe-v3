import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'genff-temp-transfers-info',
  templateUrl: './genff-temp-transfers-info.component.html',
  styleUrls: ['./genff-temp-transfers-info.component.scss']
})
export class GenffTempTransfersInfoComponent implements OnInit {

  tblModel: Model[] = [];

  constructor() { }

  ngOnInit() {

  }

  /**button action handlers */
  add() {}

  remove(item) {
    this.tblModel.splice(item, 1);
  }

}

interface Model {
  institution: string;
  from: string;
  to: string;
  pensionRecovered: boolean;
  contribution: number;
}