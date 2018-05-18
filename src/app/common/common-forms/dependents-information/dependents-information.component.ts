import { SpouseInfoTblModel } from './../../models/table-models/spose-info.tbl.model';
import { AddSpouseComponent } from '../dialogs/add-spouse/add-spouse.component';
import { AddDependentDialogComponent } from './../dialogs/add-dependent-dialog/add-dependent-dialog.component';
import { MatDialog } from '@angular/material';
import { DependentsInfoTblModel } from './../../models/table-models/dependents-info.tbl.model';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DependentsInfoModel } from '../../models/form-models/dependents-info.model';

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
  spouses: SpouseInfoTblModel[] = [];

  constructor(private dialogMgr: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      maritalStatus: ['Unmarried', Validators.required],
      wnopRefundStatus: [false, Validators.required]
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
        width: this.DIALOG_WIDTH,
        data: this.spouses
      })
      .afterClosed()
      .subscribe((response: FormGroup) => {
        if (response.valid) {
          this.dependents.push(response.value);
        }
      });
  }

  addSpouse() {
    this.dialogMgr
    .open(AddSpouseComponent, {
      width: this.DIALOG_WIDTH
    })
    .afterClosed()
    .subscribe((response: FormGroup) => {
      if(response.valid) {
        this.spouses.push(response.value);
      }
    })
  }

  remove(row) {
    this.dependents.splice(row, 1);
  }

  removeSpouse(row) {
    this.spouses.splice(row, 1);
  }

  /**
   * get the from model
   */
  getModel(): DependentsInfoModel {
    return {
      spouses: this.spouses,
      otherDependents: this.dependents,
      maritalStatus: this.maritalStatus.value,
      wnopRefundStatus: this.wnopRefundStatus.value 
    }
  }
}
