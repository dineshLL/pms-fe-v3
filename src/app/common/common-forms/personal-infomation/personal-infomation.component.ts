import { Observable } from 'rxjs/Observable';
import { VosModel } from './../../models/dto-models/vos.dto.model';
import { DssModel } from './../../models/dto-models/dss.dto.model';
import { DistrictsModel } from './../../models/dto-models/districts.dto.model';
import { MasterDataService } from './../../../services/master-data.service';
import { PersonalInfoModel } from './../../models/form-models/personal-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { ValidateForName, validPassword, ValidateForNic } from '../../validators/app.validators';

@Component({
  selector: 'common-personal-infomation',
  templateUrl: './personal-infomation.component.html',
  styleUrls: ['./personal-infomation.component.scss']
})
export class PersonalInfomationComponent implements OnInit {

  form: FormGroup;
  districts: DistrictsModel[];
  dss: DssModel[];
  vos: VosModel[];

  constructor(
    private formBuilder: FormBuilder,
    private mdService: MasterDataService
  ) { }

  ngOnInit() {
    // init form
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required, ValidateForName.bind(this)],
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required, ValidateForNic.bind(this)],
      wnopNumber: ['', Validators.required],
      gender: ['male', Validators.required],
      district: ['', Validators.required],
      ds: ['', Validators.required],
      gn: ['', Validators.required]
    });

    this.initFormChangeHooks();
  }

  getModel(): PersonalInfoModel {
    return this.form.value;
  }

  initFormChangeHooks() {

    this.mdService.getDistricts().subscribe(
      response => {
        this.districts = response;
      }, error => console.log(error)
    );

    this.district.valueChanges.subscribe(newValue => {
      this.mdService.getDss(newValue).subscribe(response => {
        this.dss = response;
        this.vos = [];
      });
    });

    this.ds.valueChanges.subscribe(newValue => {
      this.mdService.getVos(0, newValue).subscribe(response => {
        this.vos = response;
      });
    });
  }

  /**
   * form elements
   */
  get district() { return this.form.get('district') }
  get ds() { return this.form.get('ds') }
  get gn() { return this.form.get('gn') }

}
