import { MasterDataContainer } from './../common/models/dto-models/master-data-container.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MasterDataService {

  constructor(
    private http: HttpClient
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
}
