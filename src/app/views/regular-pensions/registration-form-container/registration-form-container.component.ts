import { ServiceInformationComponent } from './../../../common/common-forms/service-information/service-information.component';
import { AfterViewInit } from '@angular/core';
import { PersonalInfomationComponent } from './../../../common/common-forms/personal-infomation/personal-infomation.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit {

  isLinear: true;
  @ViewChild(PersonalInfomationComponent) personalInfoForm: PersonalInfomationComponent;
  @ViewChild(ServiceInformationComponent) serviceInfoForm: ServiceInformationComponent;

  constructor() { }

  ngOnInit() {
    
  }

  /**button action handlers */
  submit() {
    
  }
}
