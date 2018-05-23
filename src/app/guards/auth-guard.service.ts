import {
  Router,
  NavigationEnd,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { SessionStoreService } from "./../services/session-store.service";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private session: SessionStoreService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(route.url);  //<-- should be current path, whereas the route: ActivatedRouteSnapshot object should be the requested route

    if (this.session.isLoggedIn) {
      return true;
    }
    return false;
  }
}
