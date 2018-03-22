import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "common-service-information",
  templateUrl: "./service-information.component.html",
  styleUrls: ["./service-information.component.scss"]
})
export class ServiceInformationComponent implements OnInit {
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
      sectionUnder: ['', Validators.required],
      retirementReason: ['', Validators.required],
      dateOfRetirement: ['', Validators.required],
      salaryCircular: ['', Validators.required],
      confirmedPost: [true, Validators.required]
    });
  }
}
