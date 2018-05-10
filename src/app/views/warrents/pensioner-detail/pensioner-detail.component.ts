import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensioner-detail',
  templateUrl: './pensioner-detail.component.html',
  styleUrls: ['./pensioner-detail.component.scss']
})

export class PensionerDetailComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      pensionNumber: ['', Validators.required],
      nicNumber: ['', Validators.required],
      title: ['', Validators.required],
      name: ['', Validators.required],
      district: ['', Validators.required],
      basicPension: ['', Validators.required],
      CostOfLivingAllowance: ['', Validators.required],
      otherAllowance: ['', Validators.required],
      totalPension: ['', Validators.required],
      dsOffice: ['', Validators.required],
    });
  }

  updatePensioner() {
    this.router.navigate(['./warrents/registrationform']);
  }


}
