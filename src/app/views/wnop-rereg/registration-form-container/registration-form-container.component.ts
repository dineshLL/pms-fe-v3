import { ServiceInfoComponent } from './../forms/service-info/service-info.component';
import { FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DependentsInformationComponent } from './../../../common/common-forms/dependents-information/dependents-information.component';
import { ServiceInformationComponent } from './../../../common/common-forms/service-information/service-information.component';
import { PersonalInfomationComponent } from './../../../common/common-forms/personal-infomation/personal-infomation.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { WnopProfileModel } from '../../../common/models/dto-models/wno-profile.model';
import { WnopService } from '../../../services/wnop-service';
import { SnackAlertService } from '../../../notifications/snack-alert.service';
import { AlertDialogComponent } from '../../../notifications/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit, AfterViewInit {

  @ViewChild(PersonalInfomationComponent) personalInfoForm: PersonalInfomationComponent;
  @ViewChild(ServiceInfoComponent) serviceInfoForm: ServiceInfoComponent;
  @ViewChild(DependentsInformationComponent) dependentsInfoForm: DependentsInformationComponent;

  constructor(
    private service: WnopService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  //   this.personalInfoForm.form.setValue({  
  //     "fullName":"lkjkm",
  //     "name":"klk",
  //     "address":"knkjn",
  //     "dob":"2018-05-09T08:27:33.000Z",
  //     "nic":"456789",
  //     "wnopNumber":"567",
  //     "gender":"male",
  //     "district":"District 3",
  //     "ds":"DS 3",
  //     "gn":"1"
  //  });

  //  this.serviceInfoForm.form.setValue({ "officerBelongsTo": "contral_gov", "service": "service", "grade": "grade", "designation": "designation", "dateOfFirstAppoinment": "2018-05-08T09:31:12.000Z", "dateOfPermanantAppoinment": "2018-05-15T09:31:12.000Z", "confirmedAndPensionable": true, "confirmedPost": true });

    this.service.get().subscribe(
      response => {
        this.personalInfoForm.form.setValue(response.personal);
        this.serviceInfoForm.form.setValue(response.service);
      },
      error => {

      }
    );

    this.cdr.detectChanges();
  }

  /**button action handlers */
  submit() {
    
    var model: WnopProfileModel = {
      personal: this.personalInfoForm.getModel(),
      service: this.serviceInfoForm.getModel(),
      dependents: this.dependentsInfoForm.getModel()
    }

    // this.service.create(model).subscribe(
    //   respose => {
    //     const dialogRef = this.dialog.open(AlertDialogComponent, {
    //       width: "400px",
    //       data: { title: "Successful", message: "W&OP re-registration successful", buttonText: "OK" }
    //     });
    
    //     dialogRef.afterClosed().subscribe(result => {
    //       //this.router.navigate(["/gen/successful"]);
    //     });
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    console.log(model);
  }
}
