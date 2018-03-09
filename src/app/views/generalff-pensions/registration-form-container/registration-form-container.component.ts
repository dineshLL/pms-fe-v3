import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form-container',
  templateUrl: './registration-form-container.component.html',
  styleUrls: ['./registration-form-container.component.scss']
})
export class RegistrationFormContainerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**button action handlers */
  submit() {
    this.router.navigate(['/gen/extra']);
  }
}
