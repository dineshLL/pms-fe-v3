import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  Router,
  NavigationEnd,
  NavigationCancel,
  NavigationStart
} from "@angular/router";

@Component({
  // tslint:disable-next-line
  selector: "body",
  template: `
  <router-outlet></router-outlet>`
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {}
  // <mat-spinner [diameter]="50" [color]=color *ngIf="loading"></mat-spinner>
  loading = false;
  color = '#CCCCC';

  // ngOnInit() {
  //   this.router.events.subscribe(evt => {

  //     if(event instanceof NavigationStart) {
  //       this.loading = true;
  //   }
  //   else if (
  //       event instanceof NavigationEnd ||
  //       event instanceof NavigationCancel
  //       ) {
  //       this.loading = false;
  //   }

  //     if (!(evt instanceof NavigationEnd)) {
  //       return;
  //     }
  //     window.scrollTo(0, 0);
  //   });
  // }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }

      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
