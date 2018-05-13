import { DependentsInformationComponent } from './../../../common/common-forms/dependents-information/dependents-information.component';
import { ServiceInformationComponent } from './../../../common/common-forms/service-information/service-information.component';
import { AfterViewInit } from '@angular/core';
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
export class RegistrationFormContainerComponent implements OnInit {

  isLinear: true;
  @ViewChild(PersonalInfomationComponent) personalInfoForm: PersonalInfomationComponent;
  @ViewChild(ServiceInformationComponent) serviceInfoForm: ServiceInformationComponent;
  @ViewChild(DependentsInformationComponent) dependentsInfoForm: DependentsInformationComponent;

  constructor(
    private service: WnopService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  /**button action handlers */
  submit() {
    var model: WnopProfileModel = {
      personal: this.personalInfoForm.getModel(),
      service: this.serviceInfoForm.getModel(),
      dependents: this.dependentsInfoForm.getModel()
    }

    this.service.create(model).subscribe(
      respose => {
        const dialogRef = this.dialog.open(AlertDialogComponent, {
          width: "400px",
          data: { title: "Successful", message: "W&OP re-registration successful", buttonText: "OK" }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          //this.router.navigate(["/gen/successful"]);
        });
      },
      error => {
        console.log(error);
      }
    );
    console.log(model);
  }
}
