import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-container",
  templateUrl: "./page-container.component.html",
  styleUrls: ["./page-container.component.scss"]
})
export class PageContainerComponent implements OnInit {
  navs = [
    {
      link: ["dashboard"],
      code: 1,
      title: "Dashboard"
    },
    {
      link: ["registration"],
      code: 2,
      title: "Pensioner Registration"
    },
    {
      link: ["bookwarrants"],
      code: 3,
      title: "Warrants Booking"
    },
    {
      link: ["report"],
      code: 4,
      title: "Report"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.temp = this.navs[0];
  }

  temp: any;

  clicked(object) {
    this.temp = object;
  }
}
