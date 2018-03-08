import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  navs = [
    {
      link: ["basic"],
      code: 1,
      title: "Basic Information"
    },
    {
      link: ["dependents"],
      code: 2,
      title: "Dependent Information"
    },
    {
      link: ["service"],
      code: 3,
      title: "Service Information"
    },
    {
      link: ["salary"],
      code: 4,
      title: "Salary Information"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.temp = this.navs[0];
  }

  temp: any;

  clicked(object) {
    this.temp = object;
  }
}
