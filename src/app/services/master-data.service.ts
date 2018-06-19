import { PensionPointsModel } from './../common/models/dto-models/pensionpoints.dto.model';
import { DssModel } from './../common/models/dto-models/dss.dto.model';
import { ConstsService } from './consts.service';
import { DistrictsModel } from './../common/models/dto-models/districts.dto.model';
import { Observable } from 'rxjs/Observable';
import { MasterDataContainer } from './../common/models/dto-models/master-data-container.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VosModel } from '../common/models/dto-models/vos.dto.model';

@Injectable()
export class MasterDataService {

  constructor(
    private http: HttpClient,
    private consts: ConstsService
  ) { }

  getGrades(): Observable<MasterDataContainer> {
    return this.http.get<MasterDataContainer>('https://api.myjson.com/bins/1h5a5y');
  }

  getDesignations(): Observable<MasterDataContainer> {
    return this.http.get<MasterDataContainer>('https://api.myjson.com/bins/sdnee');
  }

  getServices(): Observable<MasterDataContainer> {
    return this.http.get<MasterDataContainer>('https://api.myjson.com/bins/o9rbq');
  }

  getDistricts(): Observable<DistrictsModel[]> {
    return this.http.get<DistrictsModel[]>(this.consts.CONFIG_SERVICE_BASE + 'md/districts');
  }

  getPensionPoints(): Observable<PensionPointsModel[]> {
    return this.http.get<PensionPointsModel[]>(this.consts.CONFIG_SERVICE_BASE + 'md/pensionpoints');
  }

  getDss(districtId): Observable<DssModel[]> {
    return this.http.get<DssModel[]>(this.consts.CONFIG_SERVICE_BASE
      + 'md/districts/'
      + districtId
      + '/dss'
    );
  }

  getVos(districtId, dsId): Observable<VosModel[]> {
    return this.http.get<VosModel[]>(this.consts.CONFIG_SERVICE_BASE
      + 'md/districts/'
      + districtId
      + '/dss/'
      + dsId
      + '/vos'
    );
  }
}
