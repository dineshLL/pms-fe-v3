import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gross-salary-infomation-tbl',
  templateUrl: './gross-salary-infomation-tbl.component.html',
  styleUrls: ['./gross-salary-infomation-tbl.component.scss']
})
export class GrossSalaryInfomationTblComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      grossSalary: this.formBuilder.group({
        current: ['', Validators.required],
        at2020: ['', Validators.required]
      })
    });

    this.form.valueChanges.subscribe(console.log);
  }

}