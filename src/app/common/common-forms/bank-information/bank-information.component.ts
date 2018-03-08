import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-bank-information',
  templateUrl: './bank-information.component.html',
  styleUrls: ['./bank-information.component.scss']
})
export class BankInformationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      pension: this.formBuilder.group({
        bank: ['', Validators.required],
        branch: ['', Validators.required],
        accountNumber: ['', Validators.required],
      }),
      gratuity: this.formBuilder.group({
        bank: ['', Validators.required],
        branch: ['', Validators.required],
        accountNumber: ['', Validators.required],
      })
    });
  }

}