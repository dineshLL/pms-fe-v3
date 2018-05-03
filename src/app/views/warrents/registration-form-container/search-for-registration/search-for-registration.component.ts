import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

class Config {
   searchPensioner = false;
  // showMilitory = false;
  // showJudicial = false;
  // showNonJudicial = false;
  // showArmy = false;
  // showNavy = false;
  // showAirForce = false;
}

@Component({
  selector: 'app-search-for-registration',
  templateUrl: './search-for-registration.component.html',
  styleUrls: ['./search-for-registration.component.scss']
})
export class SearchForRegistrationComponent implements OnInit {
  form: FormGroup;
  config: Config;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   pensionNumber: ['', Validators.required],
    //   nicNumber: ['', Validators.required]
    // });
    this.config = new Config(); 
    this.config.searchPensioner = true; 
  }

  searchPensioner() {
    this.config.searchPensioner = false;
    this.gotoPensionList();
  }

  gotoPensionList() {
    this.router.navigate(['./warrents/pensionerlist']);
  }
}
