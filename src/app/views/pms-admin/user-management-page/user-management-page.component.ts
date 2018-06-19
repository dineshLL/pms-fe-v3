import { Router } from '@angular/router';
import { TileInfoModel } from './../../../common/models/dto-models/tile.info-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent implements OnInit {

  tiles: TileInfoModel[] = [
    {
      displayText: 'Create new user Account',
      link: 'text'
    },
    {
      displayText: 'Update exsiting account',
      link: 'text'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  tileClicked(tile: TileInfoModel) {
    this.router.navigate([tile.link], { queryParams: { displayText: tile.displayText } });
  }

}
