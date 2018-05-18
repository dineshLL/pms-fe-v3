import { MasterDataContainer } from './../../../../common/models/dto-models/master-data-container.model';
import { MasterDataService } from './../../../../services/master-data.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wnop-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {
  
  form: FormGroup;
  grades: string[];
  designations: string[];
  services: string[];
  
  constructor(
    private masterDataService: MasterDataService,
    private formBuilder: FormBuilder) {}

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

    this.masterDataService.getGrades().subscribe(response => {
      this.grades = response.data;
    });

    this.masterDataService.getDesignations().subscribe(response => {
      this.designations = response.data;
    });

    this.masterDataService.getServices().subscribe(response => {
      this.services = response.data;
    });
  }

  /**
   * get model
   */
  getModel() {
    return this.form.value;
  }
}
