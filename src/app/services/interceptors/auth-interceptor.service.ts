import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { SessionStoreService } from "../session-store.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(
    private session: SessionStoreService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.session.isLoggedIn) {
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.session.token}`
        }
      });
    }

    return next.handle(req);
  }
}
