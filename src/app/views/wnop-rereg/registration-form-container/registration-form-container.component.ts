import { FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DependentsInformationComponent } from './../../../common/common-forms/dependents-information/dependents-information.component';
import { ServiceInformationComponent } from './../../../common/common-forms/service-information/service-information.component';
import { PersonalInfomationComponent } from './../../../common/common-forms/personal-infomation/personal-infomation.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit, AfterViewInit {

  private personalInfoFormRef: FormGroup;
  private serviceInfoFormRef: FormGroup;
  private dependentsInfoFormRef: FormGroup;

  @ViewChild(PersonalInfomationComponent) personalInfoForm: PersonalInfomationComponent;
  @ViewChild(ServiceInformationComponent) serviceInfoForm: ServiceInformationComponent;
  @ViewChild(DependentsInformationComponent) dependentsInfoForm: DependentsInformationComponent;

  constructor(
    private service: ProfileService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.personalInfoFormRef = this.personalInfoForm.form;
    this.serviceInfoFormRef = this.serviceInfoForm.form;
    this.dependentsInfoFormRef = this.dependentsInfoForm.form;

    this.cdRef.detectChanges();
  }

  /**button action handlers */
  submit() {
    var model = {
      personal: this.personalInfoForm.getModel(),
      service: this.serviceInfoForm.getModel(),
      dependents: this.dependentsInfoForm.getModel()
    }

    this.service.create(model);
    console.log(model);
  }
}
