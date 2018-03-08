import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopay-infomation-tbl',
  templateUrl: './nopay-infomation-tbl.component.html',
  styleUrls: ['./nopay-infomation-tbl.component.scss']
})
export class NopayInfomationTblComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      totalNoPay: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      setOff: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      above30SetOff: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      foreignSetoff: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      totalSetoff: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
      netNopayLeaves: this.formBuilder.group({
        years: ['', Validators.required],
        months: ['', Validators.required],
        days: ['', Validators.required]
      }),
    });
  }

}
