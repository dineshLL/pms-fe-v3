import { DependentsInformationComponent } from './../../../common/common-forms/dependents-information/dependents-information.component';
import { ServiceInformationComponent } from './../../../common/common-forms/service-information/service-information.component';
import { AfterViewInit } from '@angular/core';
import { PersonalInfomationComponent } from './../../../common/common-forms/personal-infomation/personal-infomation.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit {

  isLinear: true;
  @ViewChild(PersonalInfomationComponent) personalInfoForm: PersonalInfomationComponent;
  @ViewChild(ServiceInformationComponent) serviceInfoForm: ServiceInformationComponent;
  @ViewChild(DependentsInformationComponent) dependentsInfoForm: DependentsInformationComponent;

  constructor(
    private service: ProfileService
  ) { }

  ngOnInit() {
    
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
