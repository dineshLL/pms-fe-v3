import { ActionInfoModel } from './../common/models/dto-models/action-info.model';
import { Observable } from 'rxjs/Observable';
import { RequestInfoModel } from './../common/models/dto-models/request-info.model';
import { TileInfoModel } from './../common/models/dto-models/tile.info-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstsService } from './consts.service';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DashboardService {

  constructor(
    private consts: ConstsService,
    private http: HttpClient
  ) { }

  getTiles(appTypeCode: number): Observable<TileInfoModel[]> {
    return this.http.get<TileInfoModel[]>(this.consts.CONFIG_SERVICE_BASE + 'tiles/' + appTypeCode);
  }

  getRequests(levelId: number): Observable<RequestInfoModel[]> {
    return this.http.get<RequestInfoModel[]>(this.consts.CONFIG_SERVICE_BASE + 'requests/' + levelId);
  }

  getActions(requestId: number): Observable<ActionInfoModel[]> {
    return this.http.get<ActionInfoModel[]>(this.consts.CONFIG_SERVICE_BASE +
     'requests/' + requestId + '/actions'
    )
  }

  performAction(requestId: number, actionId: number) {
    return this.http.post(this.consts.CONFIG_SERVICE_BASE +
      'requests/' + requestId + '/actions/' + actionId, {})
  }
}
