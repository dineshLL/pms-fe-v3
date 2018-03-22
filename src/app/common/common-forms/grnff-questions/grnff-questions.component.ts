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
      deductFromPension: [false, Validators.required],
      numberOfYears: [10],
      amountFromPension: [''],
      deductFromGratuity: [false, Validators.required],
      amountOrPercentage: ['Amount'],
      amountFromGratuity: [''],
      pensionStartingDate: ['', Validators.required],
      serviceBreaks: [false, Validators.required],
      tempPensionReceived: [false, Validators.required],
      pensionReceived: [false, Validators.required],
      releasedForTempService: [false, Validators.required],
      joinedForFunds: [false, Validators.required],
      contributionRefunded: [false],
      hasDailyServicePeriod: [false]
    });
  }

  get deductFromGratuity() { return this.form.get('deductFromGratuity')}
  get deductFromPension() { return this.form.get('deductFromPension')}
  get amountOrPercentage() { return this.form.get('amountOrPercentage')}
  get serviceBreaks() { return this.form.get('serviceBreaks') }
  get tempPensionReceived() { return this.form.get('tempPensionReceived') }
  get releasedForTempService() { return this.form.get('releasedForTempService') }
  get joinedForFunds() { return this.form.get('joinedForFunds') }
  get hasDailyServicePeriod() { return this.form.get('hasDailyServicePeriod') };

}