import { Router } from '@angular/router';
import { TileInfoModel } from './../../../common/models/dto-models/tile.info-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuconfig-management-page',
  templateUrl: './menuconfig-management-page.component.html',
  styleUrls: ['./menuconfig-management-page.component.scss']
})
export class MenuconfigManagementPageComponent implements OnInit {

  tiles: TileInfoModel[] = [
    {
      displayText: 'Navigation Items',
      link: '/admin/menu-mgt/menu'
    },
    {
      displayText: 'Navigation Configurations',
      link: '/admin/menu-mgt/menu-config'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  tileClicked(tile: TileInfoModel) {
    this.router.navigate([tile.link]);
  }

}
