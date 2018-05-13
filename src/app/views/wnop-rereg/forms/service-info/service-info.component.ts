import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wnop-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {
  
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // initForm
    this.form = this.formBuilder.group({
      officerBelongsTo: ['', Validators.required],
      service: ['', Validators.required],
      grade: ['', Validators.required],
      designation: ['', Validators.required],
      dateOfFirstAppoinment: ['', Validators.required],
      dateOfPermanantAppoinment: ['', Validators.required],
      confirmedAndPensionable: [true, Validators.required],
      confirmedPost: [true,  Validators.required]
    });
  }

  /**
   * get model
   */
  getModel() {
    return this.form.value;
  }
}
