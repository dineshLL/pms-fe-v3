import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-warrent',
  templateUrl: './search-warrent.component.html',
  styleUrls: ['./search-warrent.component.scss']
})
export class SearchWarrentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchWarrent() {
    this.router.navigate(['./warrents/warrentlist']); 
  }
}
