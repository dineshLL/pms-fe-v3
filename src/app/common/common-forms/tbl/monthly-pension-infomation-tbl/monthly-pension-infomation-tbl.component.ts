import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-pension-infomation-tbl',
  templateUrl: './monthly-pension-infomation-tbl.component.html',
  styleUrls: ['./monthly-pension-infomation-tbl.component.scss']
})
export class MonthlyPensionInfomationTblComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      reduced: this.formBuilder.group({
        current: ['', Validators.required],
        at2020: ['', Validators.required]
      }),
      unReduced: this.formBuilder.group({
        current: ['', Validators.required],
        at2020: ['', Validators.required]
      }),
    });
  }

}
