import { MainNavInfoModel } from "./../common/models/dto-models/main-nav-info.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/observable/of";

@Injectable()
export class NavigationService {
  public nav: MainNavInfoModel[] = [];
  constructor(private http: HttpClient) {}

  getNavigation(): Observable<MainNavInfoModel[]> {
    console.log("calling a static service in NavigationService");
    console.log(this.nav);
    if (this.nav.length > 0) {
      return Observable.of(this.nav);
    } else {
      return this.http.get<MainNavInfoModel[]>(
        "https://api.myjson.com/bins/190tm6"
      );
    }
  }
}
