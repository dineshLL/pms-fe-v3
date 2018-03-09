import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-grnff-questions',
  templateUrl: './grnff-questions.component.html',
  styleUrls: ['./grnff-questions.component.scss']
})
export class GrnffQuestionsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      deductFromPension: ['', Validators.required],
      numberOfYears: [''],
      amountFromPension: [''],
      deductFromGratuity: ['', Validators.required],
      amountOrPercentage: [''],
      amountFromGratuity: ['']
    });
  }

}