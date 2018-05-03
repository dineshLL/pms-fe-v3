import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-warrent-details',
  templateUrl: './warrent-details.component.html',
  styleUrls: ['./warrent-details.component.scss']
})
export class WarrentDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
     // initForm
     this.form = this.formBuilder.group({
      nicNumber: ['', Validators.required],
      pensionNumber: ['', Validators.required],
      address: [''],
      warrentClass: ['', Validators.required],
      remainingWarrent: ['', Validators.required] 
    });
  }

}
