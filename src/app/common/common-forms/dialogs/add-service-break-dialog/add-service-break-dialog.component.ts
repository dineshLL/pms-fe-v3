import { MatDialogRef } from '@angular/material';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service-break-dialog',
  templateUrl: './add-service-break-dialog.component.html',
  styleUrls: ['./add-service-break-dialog.component.scss']
})
export class AddServiceBreakDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddServiceBreakDialogComponent>
  ) { 
    this.form = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      reason: ['', Validators.required],
      paymentStatus: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  close() {
    this.dialogRef.close();
  }

}
