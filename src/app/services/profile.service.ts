import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstsService } from './consts.service';

@Injectable()
export class ProfileService {

  constructor(
    private consts: ConstsService,
    private http: HttpClient
  ) { }

  create(model) {
    console.log('this is the model' + JSON.stringify(model));
    this.http.post(this.consts.PROFILE_SERVICE_BASE, model).subscribe(console.log);
  }
}
