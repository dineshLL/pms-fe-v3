import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warrent-list',
  templateUrl: './warrent-list.component.html',
  styleUrls: ['./warrent-list.component.scss']
})
export class WarrentListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPensionerDetails() {
    this.router.navigate(['./warrents/updatewarrent']);
  }
}
