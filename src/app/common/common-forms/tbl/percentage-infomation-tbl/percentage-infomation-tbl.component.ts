import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-infomation-tbl',
  templateUrl: './percentage-infomation-tbl.component.html',
  styleUrls: ['./percentage-infomation-tbl.component.scss']
})
export class PercentageInfomationTblComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      percentageIfGt25: this.formBuilder.group({
        reduced: ['', Validators.required],
        unreduced: ['', Validators.required]
      }),
      percentageIfLt25: this.formBuilder.group({
        reduced: ['', Validators.required],
        unreduced: ['', Validators.required]
      }),
      deductablePercentage: this.formBuilder.group({
        reduced: ['', Validators.required],
        unreduced: ['', Validators.required]
      }),
      deductableAsPer996: this.formBuilder.group({
        reduced: ['', Validators.required],
        unreduced: ['', Validators.required]
      }),
      netPercentage: this.formBuilder.group({
        reduced: ['', Validators.required],
        unreduced: ['', Validators.required]
      }),
    });
  }

}
