import { Injectable } from '@angular/core';
import { ConstsService } from './consts.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { WnopProfileModel } from '../common/models/dto-models/wno-profile.model';

@Injectable()
export class WnopService {

  constructor(
    private consts: ConstsService,
    private http: HttpClient
  ) { }

  create(model: WnopProfileModel): Observable<any> {
    return this.http.post<any>(this.consts.WNOP_SERVICE_BASE + 'profiles', model);
  }

  get(requestId: number): Observable<WnopProfileModel> {
    return this.http.get<WnopProfileModel>(this.consts.WNOP_SERVICE_BASE + 'requests/' + requestId);
  }

  update(refId, model: WnopProfileModel): Observable<any> {
    return this.http.put(
      this.consts.WNOP_SERVICE_BASE + 'profiles/' + refId , model
    );
  }

}
