import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-for-booking',
  templateUrl: './search-for-booking.component.html',
  styleUrls: ['./search-for-booking.component.scss']
})
export class SearchForBookingComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      pensionNumber: ['', Validators.required],
      nicNumber: ['', Validators.required]
    });

  }
  
  searchPensioner() {
    this.router.navigate(['./warrents/pensionerdetails']);
  }
}
