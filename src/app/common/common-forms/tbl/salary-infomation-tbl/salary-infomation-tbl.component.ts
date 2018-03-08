import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-infomation-tbl',
  templateUrl: './salary-infomation-tbl.component.html',
  styleUrls: ['./salary-infomation-tbl.component.scss']
})
export class SalaryInfomationTblComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      annualConsolidatedSalary: this.formBuilder.group({
        current: ['', Validators.required],
        at2020: ['', Validators.required]
      }),
      earnedIncrement: this.formBuilder.group({
        current: ['', Validators.required],
        at2020: ['', Validators.required]
      }),
    });
  }

}
