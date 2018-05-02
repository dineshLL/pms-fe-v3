import { PersonalInfoModel } from './../../models/form-models/personal-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterdataService } from '../../../services/masterdata.service';
import { SnackAlertService } from '../../../notifications/snack-alert.service';

@Component({
  selector: 'common-personal-infomation',
  templateUrl: './personal-infomation.component.html',
  styleUrls: ['./personal-infomation.component.scss']
})
export class PersonalInfomationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private masterDataService: MasterdataService,
    private snackAlert: SnackAlertService
  ) {}

  ngOnInit() {
    // init form
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      wnopNumber: ['', Validators.required],
      gender: ['male', Validators.required],
      district: ['', Validators.required],
      ds: ['', Validators.required],
      gn: ['', Validators.required]
    });

    this.initChangeHooks();
  }

  getModel(): PersonalInfoModel {
    if(this.form.valid)
    return this.form.value;
  }

  /**
   * initilizing the change hoooks for the fields
   */
  initChangeHooks() {

    //for ds change
    this.form.get('district').valueChanges.subscribe(value => {
      this.snackAlert.show('this is the alwert');
    });
  }
}
