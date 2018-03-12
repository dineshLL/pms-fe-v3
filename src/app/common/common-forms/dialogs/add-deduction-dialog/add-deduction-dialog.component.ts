import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-deduction-dialog',
  templateUrl: './add-deduction-dialog.component.html',
  styleUrls: ['./add-deduction-dialog.component.scss']
})
export class AddDeductionDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: [1, Validators.required],
      title: ['', Validators.required],
      amount: [0.00, Validators.required],
      amountFor2020: [0.00, Validators.required],
    });
  }
}