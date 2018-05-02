import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dependent-dialog',
  templateUrl: './add-dependent-dialog.component.html',
  styleUrls: ['./add-dependent-dialog.component.scss']
})
export class AddDependentDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddDependentDialogComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      disabled: [false, Validators.required]
    });
    this.form.valueChanges.subscribe(console.log);
  }

  /**button click action handlers */
  close() {
    this.dialogRef.close();
  }

}
