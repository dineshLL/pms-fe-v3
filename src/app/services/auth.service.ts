import { ConstsService } from "./consts.service";
import { SessionStoreService } from "./session-store.service";
import { AuthResponse } from "./../common/models/dto-models/auth-response.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private consts: ConstsService) {}

  authenticate(username, password): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      this.consts.PROFILE_SERVICE_BASE + "authenticate",
      { "username": username, "password": password }
    );
  }
}
