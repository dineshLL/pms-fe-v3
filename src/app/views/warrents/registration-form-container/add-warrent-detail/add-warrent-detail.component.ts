import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MatDialog } from '@angular/material';
import { JudicialPreFormDialogComponent } from '../../../../common/common-forms/dialogs/judicial-pre-form-dialog/judicial-pre-form-dialog.component';
import { AddDependentsComponent } from '../add-dependents/add-dependents.component';

@Component({
  selector: 'app-add-warrent-detail',
  templateUrl: './add-warrent-detail.component.html',
  styleUrls: ['./add-warrent-detail.component.scss']
})
export class AddWarrentDetailComponent implements OnInit {

  DIALOG_WIDTH = '600px';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private dialogMgr: MatDialog) { }

  ngOnInit() {
     // initForm
     this.form = this.formBuilder.group({
      warrentType: ['', Validators.required] 
    });
  }
  addDependent(){
    this.dialogMgr.open(AddDependentsComponent, {
      width: this.DIALOG_WIDTH
    }).afterClosed().subscribe(result => {
      if (result === true) {
        alert("Done");
      }
    });

  }
}
