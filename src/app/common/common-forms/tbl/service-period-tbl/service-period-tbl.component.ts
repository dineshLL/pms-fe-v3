import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-period-tbl',
  templateUrl: './service-period-tbl.component.html',
  styleUrls: ['./service-period-tbl.component.scss']
})
export class ServicePeriodTblComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      trainedPeriod: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      wnopDeductedPeriod: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      permanantPeriod: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      pensionablePeriod: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
    });
  }

}