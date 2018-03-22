import { BankInformationComponent } from './../../../common/common-forms/bank-information/bank-information.component';
import { DependentsInformationComponent } from './../../../common/common-forms/dependents-information/dependents-information.component';
import { ServiceInformationComponent } from './../../../common/common-forms/service-information/service-information.component';
import { ChangeDetectorRef } from '@angular/core';
import { PersonalInfomationComponent } from './../../../common/common-forms/personal-infomation/personal-infomation.component';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit, AfterViewInit {
  isLinear = false;

  @ViewChild(PersonalInfomationComponent) personalInfoForm: PersonalInfomationComponent;
  @ViewChild(ServiceInformationComponent) serviceInfoForm: ServiceInformationComponent;
  @ViewChild(DependentsInformationComponent) dependentInfoForm: DependentsInformationComponent;
  @ViewChild(BankInformationComponent) bankInfoForm: BankInformationComponent;
  
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.cdr.detectChanges();
  }

  /**button action handlers */
  submit() {
    this.router.navigate(['/gen/extra']);
  }
}
