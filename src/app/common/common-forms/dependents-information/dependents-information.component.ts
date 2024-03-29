import { AddDependentDialogComponent } from './../dialogs/add-dependent-dialog/add-dependent-dialog.component';
import { MatDialog } from '@angular/material';
import { DependentsInfoTblModel } from './../../models/table-models/dependents-info.tbl.model';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-dependents-information',
  templateUrl: './dependents-information.component.html',
  styleUrls: ['./dependents-information.component.scss']
})
export class DependentsInformationComponent implements OnInit {
  DIALOG_WIDTH = '600px';
  form: FormGroup;
  spouseInfoForm: FormGroup;
  dependents: DependentsInfoTblModel[] = [];

  constructor(private dialogMgr: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.spouseInfoForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      merriageCertNumber: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
    this.form = this.formBuilder.group({
      maritalStatus: ['Unmarried', Validators.required],
      wnopRefundStatus: ['', Validators.required],
      spouse: this.spouseInfoForm
    });

    this.form.get('maritalStatus').valueChanges.subscribe(value => {
      if (value === 'Married') this.form.get('spouse').enable();
      else this.form.get('spouse').disable();
    });

    this.form.get('wnopRefundStatus').valueChanges.subscribe(value => {
      if(value) this.form.get('refundAmount').enable();
      else this.form.get('refundAmount').disable();
    })
  }

  get maritalStatus() { return this.form.get('maritalStatus');}
  get wnopRefundStatus() { return this.form.get('wnopRefundStatus') }

  /**button action handlers */
  addDependent() {
    this.dialogMgr
      .open(AddDependentDialogComponent, {
        width: this.DIALOG_WIDTH
      })
      .afterClosed()
      .subscribe(response => {
        if (response.valid) {
          this.dependents.push(response.value);
        }
      });
  }

  remove(row) {
    this.dependents.splice(row, 1);
  }
}
