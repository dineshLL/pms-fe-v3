import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { MasterdataService } from '../../../../services/masterdata.service';

@Component({
  selector: "common-wop-rereg-service-information",
  templateUrl: "./wop-rereg-service-information.component.html",
  styleUrls: ["./wop-rereg-service-information.component.scss"]
})
export class WopReregServiceInformationComponent implements OnInit {

  form: FormGroup;

  grades = [];
  salaryScales = [];
  designations = [];
  services = [];
  retirementReasons = [];

  constructor(
    private formBuilder: FormBuilder,
    private masterDataService: MasterdataService
  ) { }

  ngOnInit() {
    // initForm
    this.form = this.formBuilder.group({
      pensionPoint: ['', Validators.required],
      officerBelongsTo: ['', Validators.required],
      service: ['', Validators.required],
      salaryCode: ['', Validators.required],
      grade: ['', Validators.required],
      designation: ['', Validators.required],
      dateOfFirstAppoinment: ['', Validators.required],
      dateOfPermanantAppoinment: ['', Validators.required],
      confirmedAndPensionable: [true, Validators.required],
      salaryCircular: ['', Validators.required],
      confirmedPost: [true, Validators.required]
    });

    /**
     * filling masterdata
     */
    this.masterDataService.getGrades().subscribe(data => {
      this.grades = data['data'];
    });

    this.masterDataService.getSalaryScales().subscribe(data => {
      this.salaryScales = data['data'];
    });

    this.masterDataService.getDesignations().subscribe(data => {
      this.designations = data['data'];
    });

    this.masterDataService.getServices().subscribe(data => {
      this.services = data['data'];
    });

    this.masterDataService.getRetirementReasons().subscribe(data => {
      this.retirementReasons = data['data'];
    });

  }
}
