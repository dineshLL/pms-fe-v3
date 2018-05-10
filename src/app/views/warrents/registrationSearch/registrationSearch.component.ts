import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationSearch',
  templateUrl: './registrationSearch.component.html',
  styleUrls: ['./registrationSearch.component.scss']
})

export class registrationSearchComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      pensionNumber: ['', Validators.required],
      nicNumber: ['', Validators.required, Validators.minLength(12)]
    });
  }

  searchPensioner() {
    this.gotoPensionList();
  }

  gotoPensionList() {
    this.router.navigate(['./warrents/pensionerlist']);
  }
}
