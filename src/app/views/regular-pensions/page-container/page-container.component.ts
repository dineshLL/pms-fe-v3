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
      link: ["search"],
      code: 3,
      title: "Search Application"
    },
    {
      link: ["reports"],
      code: 4,
      title: "Reports"
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
