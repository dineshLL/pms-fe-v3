import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratuity-infomation-tbl',
  templateUrl: './gratuity-infomation-tbl.component.html',
  styleUrls: ['./gratuity-infomation-tbl.component.scss']
})
export class GratuityInfomationTblComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      grossGratuity: ['', Validators.required],
      amountPayableToGov: ['', Validators.required],
      netGratuity: ['', Validators.required]
    });
  }

}
