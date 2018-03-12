import { PersonalInfomationComponent } from './../../../common/common-forms/personal-infomation/personal-infomation.component';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit {

  @ViewChild(PersonalInfomationComponent) personalInfo: PersonalInfomationComponent;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**button action handlers */
  submit() {
    this.router.navigate(['/gen/extra']);
  }

  removeThis() {
    const model = this.personalInfo.getModel();
  }
}
