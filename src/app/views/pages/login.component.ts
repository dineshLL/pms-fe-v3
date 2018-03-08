import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "login.component.html"
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router) {}

  // /**
  //  * button action handlers
  //  */
  // loginActionHandler() {
  //   this.router.navigate(['dashboard']);
  // }

  signup() {
    
  }

  login() {
    // this.authService
    //   .login(this.email, this.password)
    //   .then(response => {
    //     this.router.navigate(["dashboard"]);
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // //this.router.navigate(['dashboard']);
    // this.email = this.password = "";
    this.router.navigate(['dashboard']);
  }

  logout() {
  }
}
