import { AuthService } from "./../../services/auth.service";
import { SessionStoreService } from "./../../services/session-store.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "login.component.html"
})
export class LoginComponent {
  
  username: string = 'dinesh';
  password: string = 'Dinesh';

  constructor(
    private router: Router,
    private session: SessionStoreService,
    private service: AuthService
  ) {}

  // /**
  //  * button action handlers
  //  */
  // loginActionHandler() {
  //   this.router.navigate(['dashboard']);
  // }

  signup() {}

  login() {
    this.service.authenticate(this.username, this.password).subscribe(
      response => {
        this.session.setAuthInformation(response);
        this.router.navigate(['dashboard']);
      },
      error => {}
    );
    this.username = this.password = "";
  }

  logout() {}

  gotoWnopReregistration() {
    this.service.authenticate('wnopdefault', 'wnopdefault').subscribe(
      response => {
        this.session.setAuthInformation(response);
        this.router.navigate(['dashboard']);
      },
      error => {}
    );
  }
}
