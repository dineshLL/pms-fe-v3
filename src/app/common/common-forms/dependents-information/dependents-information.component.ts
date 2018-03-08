import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-dependents-information',
  templateUrl: './dependents-information.component.html',
  styleUrls: ['./dependents-information.component.scss']
})
export class DependentsInformationComponent implements OnInit {

  DIALOG_WIDTH = '600px';
  form: FormGroup;
  dependents = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      maritalStatus: ['', Validators.required],
      wnopRefundStatus: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(console.log);
    setTimeout(() => {
      this.dependents.push({
        name: 'Dinesh',
        dob: 'a',
        gender: 'a',
        isDisabled: 'a',
        nic: 'a'
      });
    }, 5000);
  }

  /**button action handlers */
  addDependentBtnActionHandler() {
    // this.dialogMgr.open(AddDependentComponent, {
    //   width: this.DIALOG_WIDTH
    // }).afterClosed().subscribe(result => {
    //   if (result === true) {
    //   }
    // });
  }

}
