import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { SpouseInfoTblModel } from '../../../models/table-models/spose-info.tbl.model';

@Component({
  selector: 'app-add-dependent-dialog',
  templateUrl: './add-dependent-dialog.component.html',
  styleUrls: ['./add-dependent-dialog.component.scss']
})
export class AddDependentDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddDependentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public spouses: SpouseInfoTblModel[]
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      disabled: [false, Validators.required],
      guardian: ['', Validators.required]
    });

    this.initFormConfigurationHooks();
  }

  /**button click action handlers */
  close() {
    this.dialogRef.close();
  }

  /**
   * init hooks
   */
  initFormConfigurationHooks() {
    if(this.spouses.length == 0) {
      this.form.get('guardian').disable();  
    }
  }

}
