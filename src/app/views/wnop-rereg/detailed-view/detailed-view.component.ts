import { ActionInfoModel } from "./../../../common/models/dto-models/action-info.model";
import { DashboardService } from "./../../../services/dashboard.service";
import { TileInfoModel } from "./../../../common/models/dto-models/tile.info-model";
import { ActivatedRoute, Router } from "@angular/router";
import { DependentsInfoModel } from "./../../../common/models/form-models/dependents-info.model";
import { ServiceInfoModel } from "./../../../common/models/form-models/service-info.model";
import { PersonalInfoModel } from "./../../../common/models/form-models/personal-info.model";
import { WnopService } from "./../../../services/wnop-service";
import { Component, OnInit } from "@angular/core";
import { WnopProfileModel } from "../../../common/models/dto-models/wno-profile.model";
import { RequestInfoModel } from "../../../common/models/dto-models/request-info.model";

@Component({
  selector: "app-detailed-view",
  templateUrl: "./detailed-view.component.html",
  styleUrls: ["./detailed-view.component.scss"]
})
export class DetailedViewComponent implements OnInit {
  model: WnopProfileModel = {} as WnopProfileModel;
  request: RequestInfoModel;
  actions: ActionInfoModel[];

  constructor(
    private service: WnopService,
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.model.personal = {} as PersonalInfoModel;
    this.model.service = {} as ServiceInfoModel;
    this.model.dependents = {} as DependentsInfoModel;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param: RequestInfoModel) => {
      this.request = param;

      this.dashboardService.getActions(this.request.requestId).subscribe(
        response => {
          this.actions = response;
        },
        error => {
          console.log(error);
        }
      );

      this.service.get(this.request.requestId).subscribe(
        response => {
          this.model = response;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  actionBtnClicked(action: ActionInfoModel) {
    if(action.actionType === 'REDIRECTION') {
      this.router.navigate(["/wnop-rereg/edit"], { queryParams: this.request });
    
    } else {
      this.dashboardService.performAction(this.request.requestId, action.actionId).subscribe(response => {
        this.router.navigate(['/wnop-rereg/dashboard']);
      })
    }
  }
}