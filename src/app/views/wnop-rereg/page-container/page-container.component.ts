import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from "./../../../services/nav.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-page-container",
  templateUrl: "./page-container.component.html",
  styleUrls: ["./page-container.component.scss"]
})
export class PageContainerComponent implements OnInit, OnDestroy {
  // navs = [
  //   {
  //     link: ["dashboard"],
  //     code: 1,
  //     title: "Dashboard"
  //   },
  //   {
  //     link: ["form"],
  //     code: 2,
  //     title: "Registration"
  //   },
  //   {
  //     link: ["search"],
  //     code: 3,
  //     title: "Search Application"
  //   },
  //   {
  //     link: ["reports"],
  //     code: 3,
  //     title: "Reports"
  //   }
  // ];

  navs = [];
  private routeSubsciption: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navService: NavigationService
  ) { }

  ngOnInit() {
    this.routeSubsciption = this.route.queryParams.subscribe((param: { mid: number; cid: number }) => {
      this.navService
        .getSubNavigation(param.cid, param.mid)
        .subscribe(
          response => {
            this.navs = response;
            this.temp = this.navs[0];
            this.router.navigate([
              this.router.url.split("?")[0] + "/" + this.navs[0].link
            ]);
            this.routeSubsciption.unsubscribe();
          },
          error => {
            this.routeSubsciption.unsubscribe();
          }
        );
    });
  }

  ngOnDestroy() {
    this.routeSubsciption.unsubscribe();
  }
  temp: any;

  clicked(object) {
    this.temp = object;
  }
}
