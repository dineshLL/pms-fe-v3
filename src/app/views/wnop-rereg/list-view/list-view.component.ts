import { Router } from '@angular/router';
import { RequestInfoModel } from './../../../common/models/dto-models/request-info.model';
import { TileInfoModel } from './../../../common/models/dto-models/tile.info-model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  tile: TileInfoModel;
  requests: RequestInfoModel[];

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (param: TileInfoModel) => {
          this.tile = param;
          this.dashboardService.getRequests(this.tile.level).subscribe(
            response => {
              this.requests = response;
            },
            error => {
              console.log(error);
            }
          );
        }
      );
  }

  moreBtnClicked(model: RequestInfoModel) {
    model.name = null;
    model.nic = null;
    this.router.navigate(['/wnop-rereg/detailed'], { queryParams: model });
  }

}
