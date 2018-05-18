import { ServiceInfoModel } from './../../../common/models/form-models/service-info.model';
import { PersonalInfoModel } from './../../../common/models/form-models/personal-info.model';
import { WnopService } from './../../../services/wnop-service';
import { Component, OnInit } from '@angular/core';
import { WnopProfileModel } from '../../../common/models/dto-models/wno-profile.model';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {

  model: WnopProfileModel = {} as WnopProfileModel;

  constructor(
    private service: WnopService
  ) {
    this.model.personal = {} as PersonalInfoModel;
    this.model.service = {} as ServiceInfoModel;
  }

  ngOnInit() {
    this.service.get().subscribe(
      response => {
        this.model = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
