import { ConstsService } from './consts.service';
import { MainNavInfoModel } from "./../common/models/dto-models/main-nav-info.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/observable/of";

@Injectable()
export class NavigationService {
  public nav: MainNavInfoModel[] = [];
  
  constructor(
    private consts: ConstsService,
    private http: HttpClient) {}

  getNavigation(): Observable<MainNavInfoModel[]> {
    if (this.nav.length > 0) {
      return Observable.of(this.nav);
    } else {
      return this.http.get<MainNavInfoModel[]>(
        this.consts.CONFIG_SERVICE_BASE + 'configs/mainmenu'
      );
    }
  }

  getSubNavigation(configId: number, mainMenuId: number): Observable<any> {
    return this.http.get<any>(
      this.consts.CONFIG_SERVICE_BASE + 'configs/' + configId +'/mainmenu/' + mainMenuId
    );
  }
}
