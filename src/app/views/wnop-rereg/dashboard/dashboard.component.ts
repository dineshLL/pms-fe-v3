import { TileInfoModel } from './../../../common/models/dto-models/tile.info-model';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles: TileInfoModel[];

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dashboardService.getTiles(0).subscribe(
      response => {
        this.tiles = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  tileClicked(tile: TileInfoModel) {
    this.router.navigate([tile.link], { queryParams : {displayText: tile.displayText, level: tile.level} });
  }

}
