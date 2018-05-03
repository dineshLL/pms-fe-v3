import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensioner-list',
  templateUrl: './pensioner-list.component.html',
  styleUrls: ['./pensioner-list.component.scss']
})
export class PensionerListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPensionerDetails() {
    this.router.navigate(['./warrents/registrationform']);
  }
}
