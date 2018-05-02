import { Injectable } from '@angular/core';
import { ConstantStore } from './constants.store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grades } from '../common/models/dto/grades.dto';
import { SalaryScales } from '../common/models/dto/salary-scales.dto';
import { Designations } from '../common/models/dto/designations.dto';
import { Services } from '@angular/core/src/view';
import { RetirementReason } from '../common/models/dto/retirement-reasons.dto';
import { IDValueModel } from '../common/models/dto/id-value.model';

@Injectable()
export class MasterdataService {

  constructor(
    private consts: ConstantStore,
    private http: HttpClient
  ) { }

  getGrades(): Observable<Grades> {
    return this.http.get<Grades>(this.consts.MASTERDATA_API_BASE + 'grades');
  }

  getSalaryScales(): Observable<SalaryScales> {
    return this.http.get<SalaryScales>(this.consts.MASTERDATA_API_BASE + 'scales');
  }

  getDesignations(): Observable<Designations> {
    return this.http.get<Designations>(this.consts.MASTERDATA_API_BASE + 'designations');
  }

  getServices(): Observable<Services> {
    return this.http.get<Services>(this.consts.MASTERDATA_API_BASE + 'services');
  }

  getRetirementReasons(): Observable<RetirementReason> {
    return this.http.get<RetirementReason>(this.consts.MASTERDATA_API_BASE + 'retirement_reasons');
  }

  getDs(): Observable<IDValueModel> {
    console.log('calling a static resource, at getDs --> master data service');
    return this.http.get<IDValueModel>('https://api.myjson.com/bins/12ngle');
  }
}
