import { PersonalInfoModel } from './../../models/form-models/personal-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'common-personal-infomation',
  templateUrl: './personal-infomation.component.html',
  styleUrls: ['./personal-infomation.component.scss']
})
export class PersonalInfomationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // init form
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      wnopNumber: ['', Validators.required],
      gender: ['', Validators.required],
      district: ['', Validators.required],
      ds: ['', Validators.required],
      gn: ['', Validators.required]
    });
  }

  getModel(): PersonalInfoModel {
    return this.form.value;
  }
}